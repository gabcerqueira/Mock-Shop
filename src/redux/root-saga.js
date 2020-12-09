import { all, call } from "redux-saga/effects";
import { shopSagas } from "./shop/shopSagas";
import { userSagas } from "./user/userSagas";
import { productSagas } from "./product/productSagas";
import { cartSagas } from "./cart/cartSagas";

export default function* rootSaga() {
	yield all([
		call(shopSagas),
		call(userSagas),
		call(cartSagas),
		call(productSagas),
	]);
}
