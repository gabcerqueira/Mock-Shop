import React from "react";
import { Link } from "react-router-dom";
import "./navbar.scss";

const Navbar = () => {
	return (
		<div className="navbar">
			<Link to="/" className="content-logo">
				<i className="fas fa-crown fa-4x"></i>
			</Link>
			<div className="nav-list">
				<Link to="/shop" className="nav-list-item">
					Shop
				</Link>

				<Link to="/aboutUs" className="nav-list-item">
					About Us
				</Link>
				<Link to="/signIn" className="nav-list-item">
					Sign in
				</Link>
				<Link to="/contact" className="nav-list-item">
					Contact
				</Link>
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
