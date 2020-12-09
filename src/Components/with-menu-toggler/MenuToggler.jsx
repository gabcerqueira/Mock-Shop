import React from "react";
import { MenuTogglerContainer, MenuTogglerIcon } from "./MenuToggler.styles";

const WithMenuToggler = (WrappedComponent) => {
	const Toggler = ({ isToggled, ...otherProps }) => {
		return isToggled ? (
			<MenuTogglerContainer>
				<MenuTogglerIcon>
					<i className="fas fa-bars"></i>
				</MenuTogglerIcon>
			</MenuTogglerContainer>
		) : (
			<WrappedComponent {...otherProps} />
		);
	};
	return Toggler;
};

export default WithMenuToggler;
