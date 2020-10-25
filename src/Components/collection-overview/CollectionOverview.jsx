import React from "react";

import { connect } from "react-redux";
import { selectCollectionsForPreview } from "../../redux/shop/shopSelectors";
import { createStructuredSelector } from "reselect";
import CollectionPreview from "../collection-preview/CollectionPreview";

import "./collectionOverview.scss";

const CollectionOverview = ({ collections }) => {
	console.log("collections: ", collections);
	return (
		<div className="collections-overview">
			{collections.map(({ id, ...collectionProps }) => {
				return <CollectionPreview key={id} {...collectionProps} />;
			})}
		</div>
	);
};

const mapStateToProps = createStructuredSelector({
	collections: selectCollectionsForPreview,
});

export default connect(mapStateToProps)(CollectionOverview);
