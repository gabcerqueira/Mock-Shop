import React from "react";
import "./navbar.scss";

const Navbar = () => {
	return (
		<div className="navbar">
			<div className="content-logo">
				<i className="fas fa-crown fa-4x"></i>
			</div>
			<div className="nav-list">
				<span className="nav-list-item">Shop</span>
				<span className="nav-list-item">About us</span>
				<span className="nav-list-item">Sign in</span>
				<span className="nav-list-item">Contact</span>
			</div>
			<div className="social-list">
				<i className="fab fa-facebook fa-2x social-list-item"></i>
				<i className="fab fa-instagram fa-2x social-list-item"></i>
				<i className="fab fa-twitter fa-2x social-list-item"></i>
				<i className="fab fa-linkedin fa-2x social-list-item"></i>
			</div>
		</div>
	);
};

export default Navbar;
