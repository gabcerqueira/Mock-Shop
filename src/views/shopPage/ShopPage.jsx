import React, { lazy, Suspense, useEffect } from "react";

import { Route } from "react-router-dom";
import { connect } from "react-redux";
import { fetchCollectionsStart } from "../../actions/shopActions";

import "./shopPage.scss";
import Spinner from "../../Components/spinner/Spinner";

// <-- Lazy imports -->
const CollectionOverviewContainer = lazy(() =>
	import("../../Components/collection-overview/CollectionsOverview.Container")
);
const CollectionContainer = lazy(() =>
	import("../collection/Collection.Container")
);

const ShopPage = ({ fetchCollectionsStart, match }) => {
	useEffect(() => {
		fetchCollectionsStart();
	}, [fetchCollectionsStart]);

	return (
		<div className="shop-page">
			<Suspense fallback={<Spinner />}>
				<Route
					exact
					path={`${match.path}`}
					component={CollectionOverviewContainer}
				/>
				<Route
					path={`${match.path}/:collectionId`}
					component={CollectionContainer}
				/>
			</Suspense>
		</div>
	);
};

const mapDispatchToProps = (dispatch) => ({
	fetchCollectionsStart: () => dispatch(fetchCollectionsStart()),
});

export default connect(null, mapDispatchToProps)(ShopPage);
