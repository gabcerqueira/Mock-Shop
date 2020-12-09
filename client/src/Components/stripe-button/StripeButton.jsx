import React from "react";
import StripeCheckout from "react-stripe-checkout";
import "./stripeButton.scss";

const StripeButton = ({ price }) => {
	const priceForStripe = price * 100;
	const publishableKey =
		"pk_test_51HfGj0FkkPiLpapKAugANS4hs3H0EnPqbxsZPY0sf22mzTNnw4d35K1RWprwHMh2i0JNVQwunc5NA399ASj8Hbzw00aRwyyTRy";
	const onToken = (token) => {
		alert("payment successful");
	};
	return (
		<StripeCheckout
			label="Pay Now"
			name="Mock-Shop Ltda"
			billingAddress
			shippingAddress
			image="https://svgshare.com/i/CUz.svg"
			description={`Your total is $${price} `}
			amount={priceForStripe}
			panelLabel="Pay Now"
			token={onToken}
			stripeKey={publishableKey}
		/>
	);
};

export default StripeButton;
