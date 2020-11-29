import React, { useState } from "react";
import { connect } from "react-redux";

import FormInput from "../form-input/FormInput";
import CustomButton from "../custom-button/CustomButton";
import { SignInContainer, SignInTitle, SignInButtons } from "./SignIn.styles";
import { googleSignInStart, emailSignInStart } from "../../actions/userActions";

const SignIn = ({ googleSignInStart, emailSignInStart }) => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const handleSubmit = async (e) => {
		e.preventDefault();
		emailSignInStart(email, password);
	};

	return (
		<SignInContainer>
			<h1>Sign In</h1>
			<SignInTitle>I already have an accoount</SignInTitle>
			<span>Sign in with your email and password</span>

			<form onSubmit={handleSubmit}>
				<FormInput
					name="email"
					type="email"
					value={email}
					required
					label="email"
					handleChange={(e) => setEmail(e.target.value)}
				/>
				<FormInput
					name="password"
					type="password"
					value={password}
					required
					label="Password"
					handleChange={(e) => setPassword(e.target.value)}
				/>
				<SignInButtons>
					<CustomButton type="submit">Sign in</CustomButton>
					<CustomButton
						type="button"
						isGoogleSignIn
						onClick={googleSignInStart}
					>
						Sign in with Google
					</CustomButton>
				</SignInButtons>
			</form>
		</SignInContainer>
	);
};

const mapDispatchToProps = (dispatch) => ({
	googleSignInStart: () => dispatch(googleSignInStart()),
	emailSignInStart: (email, password) =>
		dispatch(emailSignInStart({ email, password })),
});

export default connect(null, mapDispatchToProps)(SignIn);
