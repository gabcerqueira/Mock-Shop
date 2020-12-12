import React from "react";
import StripeCheckout from "react-stripe-checkout";
import "./stripeButton.scss";
import axios from "axios";
const StripeButton = ({ price }) => {
	const priceForStripe = price * 100;
	const publishableKey =
		"pk_test_51HfGj0FkkPiLpapKAugANS4hs3H0EnPqbxsZPY0sf22mzTNnw4d35K1RWprwHMh2i0JNVQwunc5NA399ASj8Hbzw00aRwyyTRy";
	const onToken = (token) => {
		axios({
			url: "payment",
			method: "post",
			data: {
				amount: priceForStripe,
				token: token,
			},
		})
			.then((response) => {
				alert("payment successful");
			})
			.catch((error) => {
				//console.log("Payment error : ", JSON.parse(error));
				alert(
					"There was an issue with your payment. Please sure you use the provided credit cart"
				);
			});
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
