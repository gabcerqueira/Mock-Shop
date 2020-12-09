import React from "react";
import SignIn from "../../Components/sign-in/SignIn";
import SignUp from "../../Components/sign-up/SignUp";
import "./SignInAndSignUp.scss";

const SignInAndSignUp = () => (
	<div className="sign-in-and-sign-up">
		<SignIn />
		<SignUp />
	</div>
);

export default SignInAndSignUp;
