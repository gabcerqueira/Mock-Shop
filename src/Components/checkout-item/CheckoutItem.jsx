import React from "react";
import { withRouter } from "react-router-dom";
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

const CheckoutItem = ({ item, clearItem, removeItem, addItem, history }) => {
	const { imageUrl, name, quantity, price } = item;

	return (
		<CheckoutItemContainer>
			<ImageContainer
				onClick={() => {
					history.push(`/product/${item.id}`);
				}}
			>
				<Img src={imageUrl} alt="item" />
			</ImageContainer>
			<Name className="name">{name}</Name>
			<Quantity className="quantity">
				<Arrow onClick={() => removeItem(item)}>
					<i class="fas fa-arrow-left"></i>
				</Arrow>
				<Value>{quantity}</Value>
				<Arrow onClick={() => addItem(item)}>
					<i class="fas fa-arrow-right"></i>
				</Arrow>
			</Quantity>
			<Price>R${price}</Price>
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

export default connect(null, mapDispatchToProps)(withRouter(CheckoutItem));
