import React from "react";
import Directory from "../../Components/directory/Directory";
import Navbar from "../../Components/navbar/Navbar";
import "./homepage.scss";

const Homepage = () => {
	return (
		<div className="homepage">
			<Navbar />
			<Directory />
		</div>
	);
};

export default Homepage;
