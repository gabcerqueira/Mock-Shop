import ShopActionTypes from "../redux/shop/shopTypes";

export const fetchCollectionsStart = () => ({
	type: ShopActionTypes.FETCH_COLLECTIONS_START,
});

export const fetchCollectionsFailure = (errorMessage) => ({
	type: ShopActionTypes.FETCH_COLLECTIONS_FAILURE,
	payload: errorMessage,
});

export const fetchColletionsSuccess = (collections) => ({
	type: ShopActionTypes.FETCH_COLLECTIONS_SUCCESS,
	payload: collections,
});
