import React from "react";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import CartIcon from "../../Components/cart-icon/CartIcon";
import CartDropdown from "../../Components/cart-dropdown/CartDropdown";
import { connect } from "react-redux";
import { selectCurrentUser } from "../../redux/user/userSelectors";
import { selectCartHidden } from "../../redux/cart/cartSelectors";
import { createStructuredSelector } from "reselect";
import { signOutStart } from "../../actions/userActions";
import {
	NavbarContainer,
	LogoContainer,
	NavListContainer,
	NavListItemLink,
} from "./Navbar.styles";

const Navbar = ({ currentUser, hidden, signOutStart }) => {
	return (
		<NavbarContainer>
			<LogoContainer to="/">
				<Logo className="logo" />
			</LogoContainer>

			<NavListContainer>
				<NavListItemLink to="/shop">Shop</NavListItemLink>
				<NavListItemLink to="/aboutUs">About Us</NavListItemLink>
				{currentUser ? (
					<NavListItemLink as="div" onClick={signOutStart}>
						Sign out
					</NavListItemLink>
				) : (
					<NavListItemLink to="/signIn">Sign in</NavListItemLink>
				)}
				<NavListItemLink to="/contact">Contact</NavListItemLink>
				<NavListItemLink as="div">
					<i className="fas fa-user-circle "></i>
				</NavListItemLink>
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

const mapDispatchToprops = (dispatch) => ({
	signOutStart: () => dispatch(signOutStart()),
});

export default connect(mapStateToProps, mapDispatchToprops)(Navbar);
