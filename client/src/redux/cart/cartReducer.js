import { CartActionTypes } from "./cartTypes";
import { addItemToCart, removeItemToCart } from "./cartUtils";
const INITIAL_STATE = {
	hidden: true,
	cartItems: [],
};

const cartReducer = (state = INITIAL_STATE, action) => {
	const { type, payload } = action;
	switch (type) {
		case CartActionTypes.TOGGLE_CART_HIDDEN:
			return {
				...state,
				hidden: !state.hidden,
			};
		case CartActionTypes.ADD_ITEM:
			return {
				...state,
				cartItems: addItemToCart(state.cartItems, payload),
			};
		case CartActionTypes.CLEAR_ITEM_FROM_CART:
			return {
				...state,
				cartItems: state.cartItems.filter(
					(cartItem) => cartItem.id !== payload.id
				),
			};
		case CartActionTypes.REMOVE_ITEM:
			return {
				...state,
				cartItems: removeItemToCart(state.cartItems, payload),
			};
		case CartActionTypes.CLEAR_CART:
			return {
				...state,
				cartItems: [],
			};

		default:
			return state;
	}
};

export default cartReducer;
