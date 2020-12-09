import React from "react";
import { getSingleObject } from "../../firebase/firebase";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCollectionsForPreview } from "../../redux/shop/shopSelectors";
import DescriptionProduct from "../../Components/description/DescriptionProduct";
import {
	SingleProductContainer,
	Price,
	Name,
	BackgroundImage,
	SingleProductDetail,
	SingleProductView,
} from "./SingleProduct.styles";
const SingleProduct = ({ match, collections }) => {
	const itemId = match.path.slice(9, 11);

	const product = getSingleObject(collections, itemId);
	const { name, price, imageUrl } = product;

	return (
		<SingleProductContainer>
			<SingleProductView>
				<BackgroundImage imageurl={imageUrl} />
				<SingleProductDetail>
					<Name>{name}</Name>
					<br></br>
					<Price>{`R$${price}`}</Price>
				</SingleProductDetail>
			</SingleProductView>
			<DescriptionProduct product={product} />
		</SingleProductContainer>
	);
};

const mapStateToProps = createStructuredSelector({
	collections: selectCollectionsForPreview,
});

export default connect(mapStateToProps)(SingleProduct);
