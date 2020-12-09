import React from "react";
import { withRouter } from "react-router-dom";
import {
	CartItemContainer,
	CartItemImg,
	CartItemDetails,
	CartItemName,
	CartItemPrice,
} from "./CartItem.styles";
import { connect } from "react-redux";
import { addItemToRecentlyViewed } from "../../actions/productActions";

const CartItem = ({ item, history, addItemToRecentlyViewed }) => {
	const { imageUrl, price, name, quantity } = item;

	return (
		<CartItemContainer>
			<CartItemImg
				src={imageUrl}
				alt="item"
				onClick={() => {
					history.push(`/product/${item.id}`);
					addItemToRecentlyViewed(item);
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

const mapDispatchToProps = (dispatch) => ({
	addItemToRecentlyViewed: (product) =>
		dispatch(addItemToRecentlyViewed(product)),
});

export default connect(
	null,
	mapDispatchToProps
)(withRouter(React.memo(CartItem)));
