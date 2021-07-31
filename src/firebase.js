import firebase from "firebase";

const firebaseConfig = {
	apiKey: "AIzaSyAoTpmZ6MPiZJjFVCa-t75d1UFf9G8_Hbs",
	authDomain: "linkedin-clone-a0f4f.firebaseapp.com",
	projectId: "linkedin-clone-a0f4f",
	storageBucket: "linkedin-clone-a0f4f.appspot.com",
	messagingSenderId: "538758006772",
	appId: "1:538758006772:web:4c6874f2fd934670b69ba1",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
