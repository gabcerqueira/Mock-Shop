import React from "react";

import FormInput from "../form-input/FormInput";
import CustomButton from "../custom-button/CustomButton";
import { SignInContainer, SignInTitle, SignInButtons } from "./SignIn.styles";
import { auth, signInWithGoogle } from "../../firebase/firebase";

class SignIn extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			email: "",
			password: "",
		};
	}

	handleSubmit = async (e) => {
		e.preventDefault();
		const { email, password } = this.state;
		await auth
			.signInWithEmailAndPassword(email, password)
			.then((result) => {
				this.setState({ email: "", password: "" });
			})
			.catch((error) => {
				console.error(error.message);
			});
	};

	handleChange = (e) => {
		const { value, name } = e.target;

		this.setState({ [name]: value });
	};

	render() {
		return (
			<SignInContainer>
				<h1>Sign In</h1>
				<SignInTitle>I already have an accoount</SignInTitle>
				<span>Sign in with your email and password</span>

				<form onSubmit={this.handleSubmit}>
					<FormInput
						name="email"
						type="email"
						value={this.state.email}
						required
						label="Email"
						handleChange={this.handleChange}
					/>
					<FormInput
						name="password"
						type="password"
						value={this.state.password}
						required
						label="Password"
						handleChange={this.handleChange}
					/>
					<SignInButtons>
						<CustomButton type="submit">Sign in</CustomButton>
						<CustomButton
							type="button"
							isGoogleSignIn
							onClick={signInWithGoogle}
						>
							Sign in with Google
						</CustomButton>
					</SignInButtons>
				</form>
			</SignInContainer>
		);
	}
}

export default SignIn;
