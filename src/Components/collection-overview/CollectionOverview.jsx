import React from "react";

import { connect } from "react-redux";
import { selectCollectionsForPreview } from "../../redux/shop/shopSelectors";
import { createStructuredSelector } from "reselect";
import CollectionPreview from "../collection-preview/CollectionPreview";
import HeaderImage from "../header-image/HeaderImage";
import headerImageData from "../../data/headerImageData";
import { CollectionOverviewContainer } from "./CollectionOverview.styles";

const CollectionOverview = ({ collections }) => {
	const imageUrl = headerImageData.collectionOverview;
	return (
		<div className="containerOverview">
			<HeaderImage imageUrl={imageUrl}>
				<h1>SHOP</h1>
			</HeaderImage>
			<CollectionOverviewContainer>
				{collections.map(({ id, ...collectionProps }) => {
					return <CollectionPreview key={id} {...collectionProps} />;
				})}
			</CollectionOverviewContainer>
		</div>
	);
};

const mapStateToProps = createStructuredSelector({
	collections: selectCollectionsForPreview,
});

export default connect(mapStateToProps)(CollectionOverview);
