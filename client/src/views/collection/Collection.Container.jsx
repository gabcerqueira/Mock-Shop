import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectIsCollectionsLoaded } from "../../redux/shop/shopSelectors";
import WithSpinner from "../../Components/with-spinner/WithSpinner";
import Collection from "./Collection";

const mapStateToProps = createStructuredSelector({
	isLoading: (state) => !selectIsCollectionsLoaded(state),
});

const CollectionWithSpinner = WithSpinner(Collection);

const CollectionContainer = connect(mapStateToProps)(CollectionWithSpinner);

export default CollectionContainer;
