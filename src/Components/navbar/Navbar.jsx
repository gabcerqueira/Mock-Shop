import React from "react";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import CartIcon from "../../Components/cart-icon/CartIcon";
import CartDropdown from "../../Components/cart-dropdown/CartDropdown";
import { connect } from "react-redux";
import { selectCurrentUser } from "../../redux/user/userSelectors";
import { selectCartHidden } from "../../redux/cart/cartSelectors";
import { auth } from "../../firebase/firebase";
import { createStructuredSelector } from "reselect";
import {
	NavbarContainer,
	LogoContainer,
	NavListContainer,
	NavListItemLink,
} from "./Navbar.styles";

const Navbar = ({ currentUser, hidden }) => {
	return (
		<NavbarContainer>
			<LogoContainer to="/">
				<Logo className="logo" />
			</LogoContainer>

			<NavListContainer>
				<NavListItemLink to="/shop">Shop</NavListItemLink>
				<NavListItemLink to="/aboutUs">About Us</NavListItemLink>
				{currentUser ? (
					<NavListItemLink as="div" onClick={() => auth.signOut()}>
						Sign out
					</NavListItemLink>
				) : (
					<NavListItemLink to="/signIn">Sign in</NavListItemLink>
				)}
				<NavListItemLink to="/contact">Contact</NavListItemLink>
				<CartIcon />
			</NavListContainer>
			{hidden ? null : <CartDropdown />}
		</NavbarContainer>
	);
};

const mapStateToProps = createStructuredSelector({
	currentUser: selectCurrentUser,
	hidden: selectCartHidden,
});

export default connect(mapStateToProps)(Navbar);
