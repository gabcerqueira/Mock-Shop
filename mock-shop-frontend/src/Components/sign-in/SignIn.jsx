import React from "react";

import "./signIn.scss";
import FormInput from "../form-input/FormInput";
import CustomButton from "../custom-button/CustomButton";

import { signInWithGoogle } from "../../firebase/firebase";

class SignIn extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			email: "",
			password: "",
		};
	}

	handleSubmit = (e) => {
		e.preventDefault();

		this.setState({ email: "", password: "" });
	};

	handleChange = (e) => {
		const { value, name } = e.target;

		this.setState({ [name]: value });
	};

	render() {
		return (
			<div className="sign-in">
				<h2 className="title">I already have an accoount</h2>
				<span>Sign in with your email and password</span>

				<form onSubmit={this.handleSubmit}>
					<FormInput
						name="email"
						type="email"
						value={this.state.email}
						required
						label="email"
						handleChange={this.handleChange}
					/>
					<FormInput
						name="password"
						type="password"
						value={this.state.password}
						required
						label="password"
						handleChange={this.handleChange}
					/>
					<div className="buttons">
						<CustomButton type="submit">Sign in</CustomButton>
						<CustomButton isGoogleSignIn onClick={signInWithGoogle}>
							Sign in with Google
						</CustomButton>
					</div>
				</form>
			</div>
		);
	}
}

export default SignIn;
