import React from "react";

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

const collectionItem = ({ item, addItem }) => {
	const { name, price, imageUrl } = item;

	return (
		<CollectionItemContainer>
			<BackgroundImage imageUrl={imageUrl} />

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

export default connect(null, mapDispatchToProps)(collectionItem);
