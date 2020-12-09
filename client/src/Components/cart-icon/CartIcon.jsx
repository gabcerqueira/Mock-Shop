import React from "react";

import { selectCartItemsCount } from "../../redux/cart/cartSelectors";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { toggleCartHidden } from "../../actions/cartActions";
import {
	CartIconContainer,
	CartItemCount,
	ShoppingIconContainer,
} from "./CartIcon.styles";
import "./cartIcon.scss";

const CartIcon = ({ toggleCartHidden, itemCount }) => (
	<CartIconContainer onClick={toggleCartHidden}>
		<ShoppingIconContainer />
		<CartItemCount>{itemCount}</CartItemCount>
	</CartIconContainer>
);

const mapStateToProps = createStructuredSelector({
	itemCount: selectCartItemsCount,
});

const mapDispatchToProps = (dispatch) => ({
	toggleCartHidden: () => dispatch(toggleCartHidden()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
