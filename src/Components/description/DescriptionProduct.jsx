import React from "react";
import { withRouter } from "react-router-dom";
import {
	DescriptionCointainer,
	DescriptionDetails,
	DescriptionButtonsContainer,
	Description,
	AddButton,
	CheckOutButton,
	DescriptionTitle,
} from "./DescriptionProduct.styles";
import { addItem } from "../../actions/cartActions";

import { connect } from "react-redux";

const DescriptionProduct = ({ addItem, product, history }) => (
	<DescriptionCointainer>
		<DescriptionDetails>
			<DescriptionTitle>
				<strong>Description</strong>
			</DescriptionTitle>
			<Description>
				Lorem Ipsum is simply dummy text of the printing and typesetting
				industry. Lorem Ipsum has been the industry's standard dummy text ever
				since the 1500s, when an unknown printer took a galley of type and
				scrambled it to make a type specimen book. It has survived not only five
				centuries, but also the leap into electronic typesetting, remaining
				essentially unchanged. It was popularised in the 1960s with the release
				of Letraset sheets containing Lorem Ipsum passages, and more recently
				with desktop publishing software like Aldus PageMaker including versions
				of Lorem Ipsum.
			</Description>
			<DescriptionButtonsContainer>
				<AddButton onClick={() => addItem(product)}>Add to Cart</AddButton>
				<CheckOutButton
					onClick={() => {
						history.push("/checkout");
					}}
				>
					Checkout
				</CheckOutButton>
			</DescriptionButtonsContainer>
		</DescriptionDetails>
	</DescriptionCointainer>
);

const mapDispatchToProps = (dispatch) => ({
	addItem: (product) => dispatch(addItem(product)),
});

export default connect(
	null,
	mapDispatchToProps
)(withRouter(DescriptionProduct));
