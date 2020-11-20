import React from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { addItem } from "../../actions/cartActions";
import {
	CollectionItemContainer,
	AddButton,
	PriceContainer,
	BackgroundImage,
	NameContainer,
	CollectionFooterContainer,
} from "./CollectionItem.styles";

const collectionItem = ({ item, addItem, history }) => {
	const { name, price, imageUrl } = item;

	return (
		<CollectionItemContainer>
			<BackgroundImage
				imageurl={imageUrl}
				onClick={() => {
					history.push(`/product/${item.id}`);
				}}
			/>

			<CollectionFooterContainer>
				<NameContainer>{name}</NameContainer>
				<PriceContainer className="price">{`R$${price}`}</PriceContainer>
			</CollectionFooterContainer>
			<AddButton onClick={() => addItem(item)} inverted>
				Add to Cart
			</AddButton>
		</CollectionItemContainer>
	);
};

const mapDispatchToProps = (dispatch) => ({
	addItem: (item) => dispatch(addItem(item)),
});

export default connect(null, mapDispatchToProps)(withRouter(collectionItem));
