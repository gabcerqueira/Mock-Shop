import React from "react";

import FormInput from "../form-input/FormInput";

import { auth, createUserProfileDocument } from "../../firebase/firebase";
import "./signUp.scss";
import CustomButton from "../custom-button/CustomButton";
import { SignUpContainer, SignUpTitle } from "./SignUp.styles";

class SignUp extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			displayName: "",
			email: "",
			password: "",
			confirmPassword: "",
		};
	}

	handleSubmit = async (e) => {
		e.preventDefault();

		const { displayName, email, password, confirmPassword } = this.state;

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
			this.setState({
				displayName: "",
				email: "",
				password: "",
				confirmPassword: "",
			});
		} catch (error) {
			console.log("error creating user", error.message);
		}
	};

	handleChange = (e) => {
		const { value, name } = e.target;
		this.setState({ [name]: value });
	};

	render() {
		const { displayName, email, password, confirmPassword } = this.state;
		return (
			<SignUpContainer>
				<h1>Sign Up</h1>
				<SignUpTitle>I do not have a account</SignUpTitle>
				<span>Sign up with your email and password</span>

				<form className="sign-up-form" onSubmit={this.handleSubmit}>
					<FormInput
						name="displayName"
						type="text"
						value={displayName}
						required
						label="Name"
						handleChange={this.handleChange}
					/>
					<FormInput
						name="email"
						type="email"
						value={email}
						required
						label="Email"
						handleChange={this.handleChange}
					/>
					<FormInput
						name="password"
						type="password"
						value={password}
						required
						label="Password"
						handleChange={this.handleChange}
					/>
					<FormInput
						name="confirmPassword"
						type="password"
						value={confirmPassword}
						required
						label="Confirm Password"
						handleChange={this.handleChange}
					/>
					<CustomButton type="submit">Sign Up</CustomButton>
				</form>
			</SignUpContainer>
		);
	}
}

export default SignUp;
