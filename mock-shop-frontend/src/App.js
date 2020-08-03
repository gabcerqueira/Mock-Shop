import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./Components/navbar/Navbar";
import "./App.css";

import { auth } from "./firebase/firebase";

// <-- views -->
import HomePage from "./views/homepage/Homepage";
import Hats from "./views/shop/hats/Hats";
import ShopPage from "./views/shopPage/ShopPage";
import SignInAndSignUp from "./views/sign-in-and-sign-up/SignInAndSignUp";

class App extends React.Component {
	constructor() {
		super();

		this.state = {
			currentUser: null,
		};
	}
	unsubscribeFromAuth = null;

	componentDidMount() {
		this.unsubscribeFromAuth = auth.onAuthStateChanged((user) => {
			this.setState({ currentUser: user });
		});
	}

	componentWillUnmount() {
		this.unsubscribeFromAuth();
	}

	render() {
		return (
			<>
				<Router>
					<Navbar currentUser={this.state.currentUser} />
					<Switch>
						<Route exact path="/" component={HomePage} />
						<Route exact path="/shop/hats" component={Hats} />
						<Route exact path="/shop" component={ShopPage} />
						<Route exact path="/signIn" component={SignInAndSignUp} />
					</Switch>
				</Router>
			</>
		);
	}
}

export default App;
