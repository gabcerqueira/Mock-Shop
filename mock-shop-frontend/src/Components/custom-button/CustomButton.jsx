import React from "react";

import "./customButton.scss";

const CustomButton = ({ children, isGoogleSignIn, ...buttonProps }) => (
	<button
		className={`custom-button ${isGoogleSignIn ? "google-sign-in" : ""}`}
		{...buttonProps}
	>
		{children}
	</button>
);

export default CustomButton;
