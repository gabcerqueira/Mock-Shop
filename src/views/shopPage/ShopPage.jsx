import React from "react";

import { Route } from "react-router-dom";
import CollectionOverview from "../../Components/collection-overview/CollectionOverview";
import Collection from "../collection/Collection";
import { connect } from "react-redux";
import { updateCollections } from "../../actions/shopActions";
import "./shopPage.scss";
import WithSpinner from "../../Components/with-spinner/Spinner";

import {
	firestore,
	convertCollectionsSnapshotToMap,
} from "../../firebase/firebase";

const CollectionOverviewWithSpinner = WithSpinner(CollectionOverview);
const CollectionWithSpinner = WithSpinner(Collection);

class ShopPage extends React.Component {
	state = {
		loading: true,
	};
	unsubscribeFromSnapshot = null;
	componentDidMount() {
		const { updateCollections } = this.props;
		const collectionRef = firestore.collection("collections");

		collectionRef.get().then((snapshot) => {
			const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
			updateCollections(collectionsMap);
			this.setState({ loading: false });
		});

		/*
		//Observer Pattern
		this.unsubscribeFromSnapshot = collectionRef.onSnapshot(
			async (snapshot) => {
				const CollectionsMap = convertCollectionsSnapshotToMap(snapshot);
				updateCollections(CollectionsMap);
				this.setState({ loading: false });
			}
		);
		*/
	}

	render() {
		const { match } = this.props;
		const { loading } = this.state;
		console.log(this.props);
		return (
			<div className="shop-page">
				<Route
					exact
					path={`${match.path}`}
					render={(props) => (
						<CollectionOverviewWithSpinner isLoading={loading} {...props} />
					)}
				/>
				<Route
					path={`${match.path}/:collectionId`}
					render={(props) => (
						<CollectionWithSpinner isLoading={loading} {...props} />
					)}
				/>
			</div>
		);
	}
}

const mapDispatchToProps = (dispatch) => ({
	updateCollections: (CollectionsMap) =>
		dispatch(updateCollections(CollectionsMap)),
});

export default connect(null, mapDispatchToProps)(ShopPage);
