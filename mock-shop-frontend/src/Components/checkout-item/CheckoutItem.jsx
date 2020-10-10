import React from "react";

import { connect } from "react-redux";
import { clearItemFromCart } from "../../actions/cartActions";
import "./checkoutItem.scss";

const CheckoutItem = ({ item, clearItem }) => {
	const { imageUrl, name, quantity, price } = item;

	return (
		<div className="checkout-item">
			<div className="image-container">
				<img src={imageUrl} alt="item" />
			</div>
			<span className="name">{name}</span>

			<span className="quantity">{quantity}</span>

			<span className="price">${price}</span>
			<div className="remove-button" onClick={() => clearItem(item)}>
				<span>&#10006;</span>
			</div>
		</div>
	);
};

const mapDispatchToProps = (dispatch) => ({
	clearItem: (item) => dispatch(clearItemFromCart(item)),
});

export default connect(null, mapDispatchToProps)(CheckoutItem);
