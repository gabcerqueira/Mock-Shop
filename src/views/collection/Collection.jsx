import React from "react";

import CollectionItem from "../../Components/collection-item/CollectionItem";
import { selectCollection } from "../../redux/shop/shopSelectors";
import { connect } from "react-redux";
import "./collection.scss";

const Collection = ({ collection }) => {
	const { title, items } = collection;
	return (
		<div className="collection-page ">
			<h2 className="title">{title}</h2>
			<div className="items">
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
