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

export const addDataToCollections = async (
	collectionName,
	subCollectionId,
	items
) => {
	const collectionRef = firestore
		.doc(`/${collectionName}/${subCollectionId}`)
		.set(items);
	collectionRef();
};

export const addCollectionAndDocuments = async (
	collectionKey,
	objectsToAdd
) => {
	const collectionRef = firestore.collection(collectionKey);
	const batch = firestore.batch();
	objectsToAdd.forEach((obj) => {
		const newDocRef = collectionRef.doc();
		batch.set(newDocRef, obj);
	});
	await batch.commit();

	//exemplo de chamada :
	//dat é o objeto, tem como exemplo em shop data
	//const datArray = Object.keys(dat).map((key) => dat[key]);

	/*
		addCollectionAndDocuments(
			"collections",
			datArray.map(({ title, items }) => ({ title, items }))
		);
		*/
};

export const convertCollectionsSnapshotToMap = (collections) => {
	const transformedCollection = collections.docs.map((doc) => {
		const { title, items } = doc.data();

		return {
			routeName: encodeURI(title.toLowerCase()),
			id: doc.id,
			title,
			items,
		};
	});

	return transformedCollection.reduce((accumulator, collection) => {
		accumulator[collection.title.toLowerCase()] = collection;
		return accumulator;
	}, {});
	//exemplo de chamada
};

export const getSingleObject = (collections, itemId) => {
	const collectionsItems = collections.map((collection) => collection.items);
	const item = collectionsItems.map((items) =>
		items.find((element) => element.id == itemId)
	);
	const product = item.filter((item) => item !== undefined);

	return product.reduce((acc, item) => item, {});
};

export const getCurrentUser = () => {
	return new Promise((resolve, reject) => {
		const unsubscribe = auth.onAuthStateChanged((userAuth) => {
			unsubscribe();
			resolve(userAuth);
		}, reject);
	});
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(googleProvider);

export default firebase;
