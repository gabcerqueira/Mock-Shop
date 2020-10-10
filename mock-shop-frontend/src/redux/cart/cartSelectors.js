import { createSelector } from "reselect";

const INITIAL_CART_QUANTITY = 0;

const selectCart = (state) => state.cart;

export const selectCartItems = createSelector(
	[selectCart],
	(cart) => cart.cartItems
);

export const selectCartHidden = createSelector(
	[selectCart],
	(selectCart) => selectCart.hidden
);

export const selectCartItemsCount = createSelector(
	[selectCartItems],
	(cartItems) =>
		cartItems.reduce(
			(accumulated, cartItem) => accumulated + cartItem.quantity,
			INITIAL_CART_QUANTITY
		)
);

export const selectCartTotal = createSelector([selectCartItems], (cartItems) =>
	cartItems.reduce(
		(accumulated, cartItem) => accumulated + cartItem.quantity * cartItem.price,
		INITIAL_CART_QUANTITY
	)
);
