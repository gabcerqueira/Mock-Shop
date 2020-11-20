import React, { useState } from "react";

import FormInput from "../form-input/FormInput";

import { auth, createUserProfileDocument } from "../../firebase/firebase";
import "./signUp.scss";
import CustomButton from "../custom-button/CustomButton";
import { SignUpContainer, SignUpTitle } from "./SignUp.styles";

const SignUp = () => {
	const [displayName, setDisplayName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");

	const handleSubmit = async (e) => {
		e.preventDefault();

		if (password !== confirmPassword) {
			alert("password don't match");
			return;
		}
		try {
			const { user } = await auth.createUserWithEmailAndPassword(
				email,
				password
			);
			await createUserProfileDocument(user, { displayName });
			setDisplayName("");
			setEmail("");
			setPassword("");
			setConfirmPassword("");
		} catch (error) {
			console.log("error creating user", error.message);
		}
	};

	return (
		<SignUpContainer>
			<h1>Sign Up</h1>
			<SignUpTitle>I do not have a account</SignUpTitle>
			<span>Sign up with your email and password</span>

			<form className="sign-up-form" onSubmit={handleSubmit}>
				<FormInput
					name="displayName"
					type="text"
					value={displayName}
					required
					label="Name"
					handleChange={(e) => setDisplayName(e.target.value)}
				/>
				<FormInput
					name="email"
					type="email"
					value={email}
					required
					label="Email"
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
				<FormInput
					name="confirmPassword"
					type="password"
					value={confirmPassword}
					required
					label="Confirm Password"
					handleChange={(e) => setConfirmPassword(e.target.value)}
				/>
				<CustomButton type="submit">Sign Up</CustomButton>
			</form>
		</SignUpContainer>
	);
};

export default SignUp;
