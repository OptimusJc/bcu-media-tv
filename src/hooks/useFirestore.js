import { useState, useEffect } from "react";
import { fireStore } from "../firebase";
import { getDocs, collection } from "firebase/firestore";

const useFirestore = (db_collection) => {
	const [docs, setDocs] = useState([]);

	useEffect(() => {
		const colRef = collection(fireStore, db_collection);

		getDocs(colRef)
			.then((snapshot) => {
				let document = [];
				snapshot.docs.forEach((doc) => {
					document.push({ ...doc.data(), id: doc.id });
				});

				setDocs(document);
			})
			.catch((err) => {
				console.log(err);
			});
	}, [db_collection]);

	return docs;
};

export default useFirestore;
