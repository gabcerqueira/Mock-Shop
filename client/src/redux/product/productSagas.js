import { takeLatest, all, call, put } from "redux-saga/effects";
import ProductActionTypes from "./productTypes";

import {
	searchProductSuccess,
	searchProductFailure,
} from "../../actions/productActions";

import {
	firestore,
	convertCollectionsSnapshotToMap,
} from "../../firebase/firebase";

export function* searchProductsAsync({ payload }) {
	try {
		const collectionRef = firestore.collection("collections");
		const snapshot = yield collectionRef.get();
		const collectionsMap = yield call(
			convertCollectionsSnapshotToMap,
			snapshot
		);

		const mappedCollectionsItems = yield Object.keys(collectionsMap).map(
			(key) => collectionsMap[key].items
		);
		let resultItems = [];
		console.log(payload);
		yield mappedCollectionsItems.forEach((items) =>
			items.forEach((item) => {
				if (item.name.toLowerCase().indexOf(payload) >= 0) {
					resultItems.push(item);
				}
			})
		);

		yield put(searchProductSuccess(resultItems));
	} catch (error) {
		yield put(searchProductFailure(error.message));
	}
}

export function* onSearchProductsStart() {
	yield takeLatest(
		ProductActionTypes.SEARCH_PRODUCTS_START,
		searchProductsAsync
	);
}

export function* productSagas() {
	yield all([call(onSearchProductsStart)]);
}
