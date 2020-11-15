import ShopActionTypes from "../redux/shop/shopTypes";

export const updateCollections = (collectionsMap) => ({
	type: ShopActionTypes.UPDATE_COLLECTIONS,
	payload: collectionsMap,
});
