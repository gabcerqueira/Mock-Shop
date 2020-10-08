import { CartActionTypes } from "../redux/cart/cartTypes";

export const toggleCartHidden = () => ({
	type: CartActionTypes.TOGGLE_CART_HIDDEN,
});
