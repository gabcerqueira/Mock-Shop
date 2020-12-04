import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import { selectCurrentUser } from "../../redux/user/userSelectors";
import { signOutStart } from "../../actions/userActions";

import "./Footer.scss";

const Footer = () => {
	const currentUser = useSelector(selectCurrentUser);
	const dispatch = useDispatch();

	return (
		<div className="footer">
			<div className="footer__inner">
				<div className="footer__link">
					<Link to="/" className="name">
						Mock-Shop
					</Link>
					<div className="options link">
						<div className="option">
							<Link to="/">HOME</Link>
						</div>
						<div className="option">
							<Link to="/shop">SHOP</Link>
						</div>

						<div className="option">
							{currentUser ? (
								<Link to="/" onClick={() => dispatch(signOutStart())}>
									SIGN OUT
								</Link>
							) : (
								<Link to="/signIn">SIGN IN</Link>
							)}
						</div>
						<div className="option">
							<Link to="/checkout">CHECKOUT</Link>
						</div>
					</div>
				</div>
				<div className="footer__link">
					<span className="year">-2020</span>
					<div className="options link-collection">
						<div className="option">
							<Link to="/shop/womens">WOMENS</Link>
						</div>
						<div className="option">
							<Link to="/shop/mens">MENS</Link>
						</div>
						<div className="option">
							<Link to="/shop/sneakers">SNEAKERS</Link>
						</div>
						<div className="option">
							<Link to="/shop/hats">HATS</Link>
						</div>
						<div className="option">
							<Link to="/shop/jackets">JACKETS</Link>
						</div>
					</div>
				</div>
				<div className="satoru">&copy;2020 Gabriel Cerqueira</div>
			</div>
		</div>
	);
};

export default Footer;
