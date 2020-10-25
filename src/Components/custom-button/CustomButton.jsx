import React from "react";

import "./customButton.scss";

const CustomButton = ({
	children,
	inverted,
	isGoogleSignIn,
	...buttonProps
}) => (
	<button
		className={`${inverted ? "inverted" : ""} ${
			isGoogleSignIn ? "google-sign-in" : ""
		} custom-button`}
		{...buttonProps}
	>
		{children}
	</button>
);

export default CustomButton;
