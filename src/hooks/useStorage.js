import { useState, useEffect } from "react";
import { fireStorage, fireStore } from "../firebase";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

const useStorage = (file, description, collectionName) => {
	const [progress, setProgress] = useState(0);
	const [error, setError] = useState(null);
	const [url, setUrl] = useState(null);

	useEffect(() => {
		try {
			// references
			const storageRef = ref(
				fireStorage,
				`videos/${collectionName}${file.name}`
			);
			const collectionRef = collection(
				fireStore,
				`videos/${collectionName}/${collectionName}_collection`
			);

			const uploadTask = uploadBytesResumable(storageRef, file);

			// Register three observers:
			// 1. 'state_changed' observer, called any time the state changes
			// 2. Error observer, called on failure
			// 3. Completion observer, called on successful completion
			uploadTask.on(
				"state_changed",
				(snapshot) => {
					// Observe state change events such as progress, pause, and resume
					// Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
					const progress = Math.round(
						(snapshot.bytesTransferred / snapshot.totalBytes) * 100
					);
					setProgress(progress);
				},
				(error) => {
					// Handle unsuccessful uploads
					setError(error);
				},
				async () => {
					// Handle successful uploads on complete
					// For instance, get the download URL: https://firebasestorage.googleapis.com/...
					const url = await getDownloadURL(uploadTask.snapshot.ref);

					const rawTitle = uploadTask.snapshot.ref.name;
					const parsedTitle = rawTitle.substring(0, rawTitle.indexOf("."));

					const size = (uploadTask.snapshot.totalBytes * 0.000001).toFixed(2);
					const createdAt = serverTimestamp();
					setUrl(url);

					const docData = {
						url: url,
						title: parsedTitle,
						createdAt: createdAt,
						size: size,
						description: description,
					};

					// * write to the database
					try {
						const docRef = await addDoc(collectionRef, docData);

						console.log("Document written ID: ", docRef.id);
					} catch (err) {
						console.log(err.message);
					}
				}
			);
		} catch (err) {
			console.log(`Error from useStorage: ${err}`);
		}
	}, [file, description, collectionName]);

	return { progress, url, error };
};

export default useStorage;
