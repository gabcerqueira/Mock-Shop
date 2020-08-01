import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";

// <-- views -->
import HomePage from "./views/homepage/Homepage";
import Hats from "./views/shop/hats/Hats";
import ShopPage from "./views/shopPage/ShopPage";

function App() {
	return (
		<>
			<Router>
				<Switch>
					<Route exact path="/" component={HomePage} />
					<Route exact path="/shop/hats" component={Hats} />
					<Route exact path="/shop" component={ShopPage} />
				</Switch>
			</Router>
		</>
	);
}

export default App;
