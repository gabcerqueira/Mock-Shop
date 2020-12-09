import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectIsFetching } from "../../redux/shop/shopSelectors";
import WithSpinner from "../with-spinner/WithSpinner";
import CollectionsOverview from "./CollectionOverview";

const mapStateToProps = createStructuredSelector({
	isLoading: selectIsFetching,
});

const CollectionOverviewWithSpinner = WithSpinner(CollectionsOverview);

const CollectionOverviewContainer = connect(mapStateToProps)(
	CollectionOverviewWithSpinner
);

export default CollectionOverviewContainer;
