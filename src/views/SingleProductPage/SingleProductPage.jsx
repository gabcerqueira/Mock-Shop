import React, { useEffect } from "react";
import { Route } from "react-router-dom";
import SingleProduct from "../../Components/singleProduct/SingleProduct";
import { fetchCollectionsStart } from "../../actions/shopActions";
import { connect } from "react-redux";
import WithSpinner from "../../Components/with-spinner/WithSpinner";
import { selectIsFetching } from "../../redux/shop/shopSelectors";
import { createStructuredSelector } from "reselect";
import { SingleProductPageContainer } from "./SingleProductPage.styles";

const SingleProductPageWithSpinner = WithSpinner(SingleProduct);

const SingleProductPage = ({ match, fetchCollectionsStart, isLoading }) => {
	const { itemId } = match.params;

	useEffect(() => {
		fetchCollectionsStart();
	}, [fetchCollectionsStart]);

	return (
		<SingleProductPageContainer>
			<Route
				path={`/product/${itemId}`}
				render={(props) => (
					<SingleProductPageWithSpinner isLoading={isLoading} {...props} />
				)}
			/>
		</SingleProductPageContainer>
	);
};

const mapStateToProps = createStructuredSelector({
	isLoading: selectIsFetching,
});

const mapDispatchToProps = (dispatch) => ({
	fetchCollectionsStart: () => dispatch(fetchCollectionsStart()),
});

export default connect(mapStateToProps, mapDispatchToProps)(SingleProductPage);
