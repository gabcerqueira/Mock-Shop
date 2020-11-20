import ProductActionTypes from "./productTypes";

const INITIAL_STATE = {
	product: null,
	errorMessage: null,
	isFetching: false,
};

const productReducer = (state = INITIAL_STATE, action) => {
	const { type, payload } = action;
	switch (type) {
		case ProductActionTypes.GET_SINGLE_PRODUCT_START:
			return {
				...state,
				isFetching: true,
			};
		case ProductActionTypes.GET_SINGLE_PRODUCT_SUCCESS:
			return {
				...state,
				product: payload,
				isFetching: false,
			};
		case ProductActionTypes.GET_SINGLE_PRODUCT_FAILURE:
			return {
				...state,
				product: null,
				errorMessage: payload,
				isFetching: false,
			};

		default:
			return state;
	}
};

export default productReducer;
