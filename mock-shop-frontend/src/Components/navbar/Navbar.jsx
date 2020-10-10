import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import CartIcon from "../../Components/cart-icon/CartIcon";
import CartDropdown from "../../Components/cart-dropdown/CartDropdown";
import { connect } from "react-redux";
import { selectCurrentUser } from "../../redux/user/userSelectors";
import { selectCartHidden } from "../../redux/cart/cartSelectors";
import { auth } from "../../firebase/firebase";
import { createStructuredSelector } from "reselect";
import "./navbar.scss";

const Navbar = ({ currentUser, hidden }) => {
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
				<CartIcon />
			</div>

			{hidden ? null : <CartDropdown />}
		</div>
	);
};

const mapStateToProps = createStructuredSelector({
	currentUser: selectCurrentUser,
	hidden: selectCartHidden,
});

export default connect(mapStateToProps)(Navbar);
