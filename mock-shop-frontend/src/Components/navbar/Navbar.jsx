import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import "./navbar.scss";

import { auth } from "../../firebase/firebase";

const Navbar = ({ currentUser }) => {
	return (
		<div className="navbar">
			<Link to="/" className="content-logo">
				<Logo className="logo" />
			</Link>

			<div className="nav-list">
				<Link to="/shop" className="nav-list-item">
					Shop
				</Link>

				<Link to="/aboutUs" className="nav-list-item">
					About Us
				</Link>

				{currentUser ? (
					<div onClick={() => auth.signOut()} className="nav-list-item">
						Sign out
					</div>
				) : (
					<Link to="/signIn" className="nav-list-item">
						Sign in
					</Link>
				)}

				<Link to="/contact" className="nav-list-item">
					Contact
				</Link>
			</div>
		</div>
	);
};

export default Navbar;
