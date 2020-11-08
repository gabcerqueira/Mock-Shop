import React from "react";

import {
	CartItemContainer,
	CartItemImg,
	CartItemDetails,
	CartItemName,
	CartItemPrice,
} from "./CartItem.styles";

const CartItem = ({ item }) => {
	const { imageUrl, price, name, quantity } = item;
	return (
		<CartItemContainer>
			<CartItemImg src={imageUrl} alt="item" />
			<CartItemDetails>
				<CartItemName>{name}</CartItemName>
				<CartItemPrice>
					{quantity} X ${price}
				</CartItemPrice>
			</CartItemDetails>
		</CartItemContainer>
	);
};

export default CartItem;
