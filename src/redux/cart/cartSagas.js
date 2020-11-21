import { takeLatest, all, call, put } from "redux-saga/effects";

import { clearCart } from "../../actions/cartActions";
import UserActionTypes from "../user/userTypes";

export function* clearCartOnSignOut() {
	try {
		yield put(clearCart());
	} catch (error) {}
}

export function* onClearCart() {
	yield takeLatest(UserActionTypes.SIGN_OUT_SUCCESS, clearCartOnSignOut);
}

export function* cartSagas() {
	yield all([call(onClearCart)]);
}
