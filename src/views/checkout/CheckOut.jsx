import React from "react";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import StripeButton from "../../Components/stripe-button/StripeButton";
import {
	selectCartItems,
	selectCartTotal,
} from "../../redux/cart/cartSelectors";
import CheckoutItem from "../../Components/checkout-item/CheckoutItem";
import HeaderImage from "../../Components/header-image/HeaderImage";
import HeaderImageData from "../../data/headerImageData";
import "./checkOut.scss";

const CheckOut = ({ cartItems, totalValue }) => {
	const imageUrl = HeaderImageData.checkout;
	return (
		<div className="checkout-page fadeIn">
			<HeaderImage imageUrl={imageUrl}>
				<h1>Checkout</h1>
			</HeaderImage>
			<div className="checkout-header fadeIn">
				<div className="header-block">
					<span>Product</span>
				</div>
				<div className="header-block">
					<span>Description</span>
				</div>
				<div className="header-block">
					<span>Quantity</span>
				</div>
				<div className="header-block">
					<span>Price</span>
				</div>
				<div className="header-block">
					<span>Remove</span>
				</div>
			</div>
			{cartItems.map((cartItem) => (
				<CheckoutItem key={cartItem.id} item={cartItem} fadeIn />
			))}
			<div className="total">
				<span>TOTAL: ${totalValue}</span>
			</div>
			<StripeButton price={totalValue} />
			<div className="test-warning">
				* Use the following test credit card for payments *
				<br />
				5555 5555 5555 4444 - Exp :07/27 - CVV : 123
			</div>
		</div>
	);
};

const mapStateToProps = createStructuredSelector({
	cartItems: selectCartItems,
	totalValue: selectCartTotal,
});

export default connect(mapStateToProps)(CheckOut);
