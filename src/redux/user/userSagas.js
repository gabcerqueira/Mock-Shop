import { put, takeLatest, all, call } from "redux-saga/effects";

import UserActionTypes from "./userTypes";

import {
	auth,
	googleProvider,
	createUserProfileDocument,
} from "../../firebase/firebase";
import { signInSuccess, signInFailure } from "../../actions/userActions";

export function* getSnapshotFromUserAuth(userAuth) {
	try {
		const userRef = yield call(createUserProfileDocument, userAuth);
		const userSnapshot = yield userRef.get();
		yield put(signInSuccess({ id: userSnapshot.id, ...userSnapshot.data() }));
	} catch (error) {
		yield put(signInFailure(error.message));
	}
}

export function* googleSignInAsync() {
	try {
		const { user } = yield auth.signInWithPopup(googleProvider);
		yield getSnapshotFromUserAuth(user);
	} catch (error) {
		yield put(signInFailure(error.message));
	}
}
export function* signInWithEmailAsync({ payload: { email, password } }) {
	try {
		const { user } = yield auth.signInWithEmailAndPassword(email, password);
		yield getSnapshotFromUserAuth(user);
	} catch (error) {
		yield put(signInFailure(error.message));
	}
}

export function* emailSignInStart() {
	yield takeLatest(UserActionTypes.EMAIL_SIGN_IN_START, signInWithEmailAsync);
}

export function* googleSignInStart() {
	yield takeLatest(UserActionTypes.GOOGLE_SIGN_IN_START, googleSignInAsync);
}

export function* userSagas() {
	yield all([call(googleSignInStart), call(emailSignInStart)]);
}
