import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
	apiKey: "AIzaSyDaz0ucWUdNo7RRcOY8EkOd6OFjnHsS1kg",
	authDomain: "mock-shop-db.firebaseapp.com",
	databaseURL: "https://mock-shop-db.firebaseio.com",
	projectId: "mock-shop-db",
	storageBucket: "mock-shop-db.appspot.com",
	messagingSenderId: "554682725185",
	appId: "1:554682725185:web:d0acd968bea1d3626fa7c0",
	measurementId: "G-GRZH2MLSQK",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const createUserProfileDocument = async (userAuth, additionalData) => {
	if (!userAuth) return;
	const userRef = firestore.doc(`/users/${userAuth.uid}`);

	const snapshot = await userRef.get();

	if (!snapshot.exists) {
		const { displayName, email } = userAuth;
		const createdAt = new Date();

		try {
			await userRef.set({
				displayName,
				email,
				createdAt,
				...additionalData,
			});
		} catch (error) {
			console.log("error creating user", error.message);
		}
	}

	return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
