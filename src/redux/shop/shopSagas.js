import { call, put, takeLatest } from "redux-saga/effects";

import ShopActionTypes from "./shopTypes";

import {
	firestore,
	convertCollectionsSnapshotToMap,
} from "../../firebase/firebase";

import {
	fetchColletionsSuccess,
	fetchCollectionsFailure,
} from "../../actions/shopActions";

export function* fetchCollectionsAsync() {
	try {
		const collectionRef = firestore.collection("collections");
		const snapshot = yield collectionRef.get();
		const collectionsMap = yield call(
			convertCollectionsSnapshotToMap,
			snapshot
		);
		yield put(fetchColletionsSuccess(collectionsMap));
	} catch (error) {
		yield put(fetchCollectionsFailure(error.message));
	}

	/*
	collectionRef
		.get()
		.then((snapshot) => {
			const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
			dispatch(fetchColletionsSuccess(collectionsMap));
		})
		.catch((error) => dispatch(fetchCollectionsFailure(error.message)));
		*/
}

export function* fetchCollectionsStart() {
	yield takeLatest(
		ShopActionTypes.FETCH_COLLECTIONS_START,
		fetchCollectionsAsync
	);
}
