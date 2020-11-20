import { all, call } from "redux-saga/effects";
import { fetchCollectionsStart } from "./shop/shopSagas";
import { userSagas } from "./user/userSagas";
//import { productSagas } from "./product/productSagas";

export default function* rootSaga() {
	yield all([call(fetchCollectionsStart), call(userSagas)]);
}
