import { put, takeLatest, all, call } from "redux-saga/effects";

import UserActionTypes from "./userTypes";

import {
	auth,
	googleProvider,
	createUserProfileDocument,
	getCurrentUser,
} from "../../firebase/firebase";
import {
	signInSuccess,
	signInFailure,
	signOutSuccess,
	signOutFailure,
	signUpSuccess,
	signUpFailure,
} from "../../actions/userActions";

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

export function* isUserAuthenticated() {
	try {
		const userAuth = yield getCurrentUser();
		if (!userAuth) return;
		yield getSnapshotFromUserAuth(userAuth);
	} catch (error) {
		yield put(signInFailure(error.message));
	}
}

export function* isUserSignedOut() {
	try {
		yield auth.signOut();
		yield put(signOutSuccess());
	} catch (error) {
		yield put(signOutFailure(error.message));
	}
}

export function* isUserSignedUp({ payload: { email, password, displayName } }) {
	try {
		const { user } = yield auth.createUserWithEmailAndPassword(email, password);
		yield createUserProfileDocument(user, { displayName });
		yield put(signUpSuccess(user));
		yield getSnapshotFromUserAuth(user);
	} catch (error) {
		yield put(signUpFailure(error.message));
	}
}

export function* emailSignInStart() {
	yield takeLatest(UserActionTypes.EMAIL_SIGN_IN_START, signInWithEmailAsync);
}

export function* googleSignInStart() {
	yield takeLatest(UserActionTypes.GOOGLE_SIGN_IN_START, googleSignInAsync);
}

export function* onCheckUserSession() {
	yield takeLatest(UserActionTypes.CHECK_USER_SESSION, isUserAuthenticated);
}

export function* onUserSignOutStart() {
	yield takeLatest(UserActionTypes.SIGN_OUT_START, isUserSignedOut);
}

export function* onSignUpStart() {
	yield takeLatest(UserActionTypes.SIGN_UP_START, isUserSignedUp);
}

export function* userSagas() {
	yield all([
		call(googleSignInStart),
		call(emailSignInStart),
		call(onCheckUserSession),
		call(onUserSignOutStart),
		call(onSignUpStart),
	]);
}
