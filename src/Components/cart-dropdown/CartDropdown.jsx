import React from "react";

import CartItem from "../cart-item/CartItem";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { withRouter } from "react-router-dom";
import { selectCartItems } from "../../redux/cart/cartSelectors";
import { toggleCartHidden } from "../../actions/cartActions";
import {
	CartDropdownContainer,
	CartItemsContainer,
	CartEmptyMessage,
	CheckoutButton,
} from "./CartDropdown.styles";

const CartDropdown = ({ cartItems, history, dispatch }) => (
	<CartDropdownContainer>
		<CartItemsContainer>
			{cartItems.length ? (
				cartItems.map((cartItem) => (
					<CartItem key={cartItem.id} item={cartItem} />
				))
			) : (
				<CartEmptyMessage>Your cart is empty</CartEmptyMessage>
			)}
		</CartItemsContainer>
		<CheckoutButton
			onClick={() => {
				history.push("/checkout");
				dispatch(toggleCartHidden());
			}}
		>
			GO TO CHECKOUT
		</CheckoutButton>
	</CartDropdownContainer>
);

const mapStateToProps = createStructuredSelector({
	cartItems: selectCartItems,
});

export default withRouter(connect(mapStateToProps)(CartDropdown));
