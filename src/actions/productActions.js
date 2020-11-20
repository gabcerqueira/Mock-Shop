import ProductActionTypes from "../redux/product/productTypes";

export const getSingleProductStart = (productInfo) => ({
	type: ProductActionTypes.GET_SINGLE_PRODUCT_START,
	payload: productInfo,
});

export const getSingleProductSuccess = (product) => ({
	type: ProductActionTypes.GET_SINGLE_PRODUCT_SUCCESS,
	payload: product,
});

export const getSingleProductFailure = (errorMessage) => ({
	type: ProductActionTypes.GET_SINGLE_PRODUCT_SUCCESS,
	payload: errorMessage,
});
