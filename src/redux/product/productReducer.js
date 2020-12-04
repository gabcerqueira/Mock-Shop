import ProductActionTypes from "./productTypes";
import { addItemToRecentlyViewed } from "./productUtils";
const INITIAL_STATE = {
	recentlyViewed: [],
};

const productReducer = (state = INITIAL_STATE, action) => {
	const { type, payload } = action;
	switch (type) {
		case ProductActionTypes.ADD_PRODUCT_TO_RECENTLY_VIEWED:
			return {
				...state,
				recentlyViewed: addItemToRecentlyViewed(state.recentlyViewed, payload),
			};

		default:
			return state;
	}
};

export default productReducer;
