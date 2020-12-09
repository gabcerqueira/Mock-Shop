import ProductActionTypes from "./productTypes";
import { addItemToRecentlyViewed } from "./productUtils";
const INITIAL_STATE = {
	recentlyViewed: [],
	searchResult: [],
	errorMessage: null,
};

const productReducer = (state = INITIAL_STATE, action) => {
	const { type, payload } = action;
	switch (type) {
		case ProductActionTypes.ADD_PRODUCT_TO_RECENTLY_VIEWED:
			return {
				...state,
				recentlyViewed: addItemToRecentlyViewed(state.recentlyViewed, payload),
			};

		case ProductActionTypes.SEARCH_PRODUCTS_SUCCESS:
			return {
				...state,
				searchResult: payload,
			};

		case ProductActionTypes.SEARCH_PRODUCTS_FAILURE:
			return {
				...state,
				errorMessage: payload,
			};

		default:
			return state;
	}
};

export default productReducer;
