import React, { lazy, Suspense, useEffect } from "react";
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
import { checkUserSession } from "./actions/userActions";
import { GlobalStyle } from "./global.styles";
import ErrorBoundary from "./Components/error-boundary/ErrorBoundary";
import ScrollToTop from "./Components/ScrollToTop/ScrollToTop";
// <-- Components -->
import Spinner from "./Components/spinner/Spinner";
// <-- Views -->
const HomePage = lazy(() => import("./views/homepage/Homepage"));
const ShopPage = lazy(() => import("./views/shopPage/ShopPage"));
const SignInAndSignUp = lazy(() =>
	import("./views/sign-in-and-sign-up/SignInAndSignUp")
);
const CheckOut = lazy(() => import("./views/checkout/CheckOut"));
const SingleProductPage = lazy(() =>
	import("./views/SingleProductPage/SingleProductPage")
);

const App = ({ currentUser, checkUserSession }) => {
	useEffect(() => {
		checkUserSession();
	}, [checkUserSession]);

	return (
		<>
			<Router>
				<GlobalStyle />
				<Navbar />
				<ScrollToTop />
				<Switch>
					<ErrorBoundary>
						<Suspense fallback={<Spinner />}>
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
						</Suspense>
					</ErrorBoundary>
				</Switch>
			</Router>
		</>
	);
};

const mapStateToProps = createStructuredSelector({
	currentUser: selectCurrentUser,
});

const mapDispatchToProps = (dispatch) => ({
	checkUserSession: () => dispatch(checkUserSession()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
