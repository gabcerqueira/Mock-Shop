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
import { selectCurrentUser } from "./redux/user/userSelectors";
import "./App.css";

// <-- Views -->
import HomePage from "./views/homepage/Homepage";
import ShopPage from "./views/shopPage/ShopPage";
import SignInAndSignUp from "./views/sign-in-and-sign-up/SignInAndSignUp";
import CheckOut from "./views/checkout/CheckOut";
import SingleProductPage from "./views/SingleProductPage/SingleProductPage";

const App = ({ currentUser }) => {
	return (
		<>
			<Router>
				<Navbar />
				<Switch>
					<Route exact path="/" component={HomePage} />
					<Route path="/shop" component={ShopPage} />
					<Route exact path="/checkout" component={CheckOut} />
					<Route path="/product/:itemId" component={SingleProductPage} />
					<Route
						exact
						path="/signIn"
						render={() =>
							currentUser ? <Redirect to="/" /> : <SignInAndSignUp />
						}
					/>
				</Switch>
			</Router>
		</>
	);
};

const mapStateToProps = createStructuredSelector({
	currentUser: selectCurrentUser,
});

export default connect(mapStateToProps)(App);
