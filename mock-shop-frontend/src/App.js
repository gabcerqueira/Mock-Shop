import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";

// <-- views -->
import HomePage from "./views/homepage/Homepage";
import Hats from "./views/shop/hats/Hats";

function App() {
	return (
		<>
			<Router>
				<Switch>
					<Route exact path="/" component={HomePage} />
					<Route exact path="/shop/hats" component={Hats} />
				</Switch>
			</Router>
		</>
	);
}

export default App;
