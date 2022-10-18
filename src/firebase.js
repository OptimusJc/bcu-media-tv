// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: "AIzaSyB73H4ptSPCMzDcdFI0K5qeTwntN_3xTXQ",
	authDomain: "bcu-media-tv.firebaseapp.com",
	projectId: "bcu-media-tv",
	storageBucket: "bcu-media-tv.appspot.com",
	messagingSenderId: "51366547446",
	appId: "1:51366547446:web:9c2f7d87d64c486f3241d7",
	measurementId: "G-CJQNQY3WPH",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const fireStorage = getStorage(app);
const fireStore = getFirestore(app);

export { fireStorage, fireStore };
