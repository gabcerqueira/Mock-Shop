import React from "react";
import {
	BrowserRouter as Router,
	Route,
	Switch,
	Redirect,
} from "react-router-dom";
import Navbar from "./Components/navbar/Navbar";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { setCurrentUser } from "./actions/userActions";
import { selectCurrentUser } from "./redux/user/userSelectors";
import "./App.css";

import { auth, createUserProfileDocument } from "./firebase/firebase";

// <-- Views -->
import HomePage from "./views/homepage/Homepage";
import Hats from "./views/shop/hats/Hats";
import ShopPage from "./views/shopPage/ShopPage";
import SignInAndSignUp from "./views/sign-in-and-sign-up/SignInAndSignUp";
import CheckOut from "./views/checkout/CheckOut";

class App extends React.Component {
	unsubscribeFromAuth = null;

	componentDidMount() {
		const { setCurrentUser } = this.props;
		this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
			if (userAuth) {
				const userRef = await createUserProfileDocument(userAuth);

				userRef.onSnapshot((snapshot) => {
					setCurrentUser({ id: snapshot.id, ...snapshot.data() });
				});
			}

			setCurrentUser(userAuth);
		});
	}

	componentWillUnmount() {
		this.unsubscribeFromAuth();
	}

	render() {
		return (
			<>
				<Router>
					<Navbar />
					<Switch>
						<Route exact path="/" component={HomePage} />
						<Route exact path="/shop/hats" component={Hats} />
						<Route exact path="/shop" component={ShopPage} />
						<Route exact path="/checkout" component={CheckOut} />
						<Route
							exact
							path="/signIn"
							render={() =>
								this.props.currentUser ? (
									<Redirect to="/" />
								) : (
									<SignInAndSignUp />
								)
							}
						/>
					</Switch>
				</Router>
			</>
		);
	}
}

const mapStateToProps = createStructuredSelector({
	currentUser: selectCurrentUser,
});

const mapDispatchToProps = (dispatch) => ({
	setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
