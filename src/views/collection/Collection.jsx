import React from "react";

import CollectionItem from "../../Components/collection-item/CollectionItem";
import { selectCollection } from "../../redux/shop/shopSelectors";
import { connect } from "react-redux";
import HeaderImage from "../../Components/header-image/HeaderImage";
import headerImageData from "../../data/headerImageData";
import "./collection.scss";

const Collection = ({ collection }) => {
	const { title, items } = collection;

	const imageUrl = headerImageData;

	return (
		<div className="collection-page ">
			<HeaderImage imageUrl={imageUrl[title.toLowerCase()]}>
				<h1>{title.toUpperCase()}</h1>
			</HeaderImage>

			<div className="items fadeIn">
				{items.map((Item) => (
					<CollectionItem key={Item.id} item={Item} />
				))}
			</div>
		</div>
	);
};

const mapStateToProps = (state, ownProps) => ({
	collection: selectCollection(ownProps.match.params.collectionId)(state),
});

export default connect(mapStateToProps)(Collection);
