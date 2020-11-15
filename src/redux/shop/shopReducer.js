import ShopActionTypes from "../../redux/shop/shopTypes";
const INITIAL_STATE = {
	collections: null,
};

const shopReducer = (state = INITIAL_STATE, action) => {
	const { type, payload } = action;
	switch (type) {
		case ShopActionTypes.UPDATE_COLLECTIONS:
			return {
				...state,
				collections: payload,
			};
		default:
			return state;
	}
};

export default shopReducer;
