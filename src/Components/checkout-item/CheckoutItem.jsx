import React from "react";

import { connect } from "react-redux";
import {
	clearItemFromCart,
	removeItem,
	addItem,
} from "../../actions/cartActions";
import {
	CheckoutItemContainer,
	ImageContainer,
	Img,
	Name,
	Quantity,
	Arrow,
	Value,
	Price,
	RemoveButtonContainer,
	RemoveButton,
} from "./CheckoutItem.styles";

const CheckoutItem = ({ item, clearItem, removeItem, addItem }) => {
	const { imageUrl, name, quantity, price } = item;

	return (
		<CheckoutItemContainer>
			<ImageContainer>
				<Img src={imageUrl} alt="item" />
			</ImageContainer>
			<Name className="name">{name}</Name>
			<Quantity className="quantity">
				<Arrow onClick={() => removeItem(item)}>&#10094;</Arrow>
				<Value>{quantity}</Value>
				<Arrow onClick={() => addItem(item)}>&#10095;</Arrow>
			</Quantity>
			<Price>${price}</Price>
			<RemoveButtonContainer onClick={() => clearItem(item)}>
				<RemoveButton>&#10006;</RemoveButton>
			</RemoveButtonContainer>
		</CheckoutItemContainer>
	);
};

const mapDispatchToProps = (dispatch) => ({
	clearItem: (item) => dispatch(clearItemFromCart(item)),
	removeItem: (item) => dispatch(removeItem(item)),
	addItem: (item) => dispatch(addItem(item)),
});

export default connect(null, mapDispatchToProps)(CheckoutItem);
