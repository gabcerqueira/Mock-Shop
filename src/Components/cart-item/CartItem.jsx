import React from "react";
import { withRouter } from "react-router-dom";
import {
	CartItemContainer,
	CartItemImg,
	CartItemDetails,
	CartItemName,
	CartItemPrice,
} from "./CartItem.styles";

const CartItem = ({ item, history }) => {
	const { imageUrl, price, name, quantity } = item;
	return (
		<CartItemContainer>
			<CartItemImg
				src={imageUrl}
				alt="item"
				onClick={() => {
					history.push(`/product/${item.id}`);
				}}
			/>
			<CartItemDetails>
				<CartItemName>{name}</CartItemName>
				<CartItemPrice>
					{quantity} X ${price}
				</CartItemPrice>
			</CartItemDetails>
		</CartItemContainer>
	);
};

export default withRouter(React.memo(CartItem));
