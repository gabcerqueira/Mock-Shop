import React from "react";

import { connect } from "react-redux";
import { selectCollectionsForPreview } from "../../redux/shop/shopSelectors";
import { createStructuredSelector } from "reselect";
import CollectionPreview from "../collection-preview/CollectionPreview";
import { CollectionOverviewContainer } from "./CollectionOverview.styles";

const CollectionOverview = ({ collections }) => {
	return (
		<CollectionOverviewContainer>
			{collections.map(({ id, ...collectionProps }) => {
				return <CollectionPreview key={id} {...collectionProps} />;
			})}
		</CollectionOverviewContainer>
	);
};

const mapStateToProps = createStructuredSelector({
	collections: selectCollectionsForPreview,
});

export default connect(mapStateToProps)(CollectionOverview);
