import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { addItem } from "../../actions/cartActions";
import { addItemToRecentlyViewed } from "../../actions/productActions";
import {
	CollectionItemContainer,
	AddButton,
	PriceContainer,
	BackgroundImage,
	NameContainer,
	CollectionFooterContainer,
	AddedShow,
} from "./CollectionItem.styles";

const CollectionItem = ({
	item,
	addItem,
	history,
	addItemToRecentlyViewed,
}) => {
	const { name, price, imageUrl } = item;

	const [added, setAdded] = useState(false);

	const handleAdded = () => {
		setAdded(true);
		setTimeout(() => setAdded(false), 500);
	};

	return (
		<CollectionItemContainer>
			<BackgroundImage
				imageurl={imageUrl}
				onClick={() => {
					history.push(`/product/${item.id}`);
					addItemToRecentlyViewed(item);
				}}
			/>
			<AddedShow added={added}>
				<span>Added!</span>
			</AddedShow>

			<CollectionFooterContainer>
				<NameContainer>{name}</NameContainer>
				<PriceContainer className="price">{`R$${price}`}</PriceContainer>
			</CollectionFooterContainer>
			<AddButton
				onClick={() => {
					addItem(item);
					handleAdded();
				}}
				inverted
			>
				Add to Cart
			</AddButton>
		</CollectionItemContainer>
	);
};

const mapDispatchToProps = (dispatch) => ({
	addItem: (item) => dispatch(addItem(item)),
	addItemToRecentlyViewed: (item) => dispatch(addItemToRecentlyViewed(item)),
});

export default connect(null, mapDispatchToProps)(withRouter(CollectionItem));
