import React from "react";
import { withRouter } from "react-router-dom";
import {
	MenuItemContainer,
	BackgroundImageContainer,
	ContentContainer,
	ContentTitle,
	ContentSubtitle,
} from "./MenuItem.styles";
import "./menuItem.scss";
const MenuItem = ({ title, imageUrl, key, size, history, linkUrl, match }) => {
	return (
		<MenuItemContainer size={size} onClick={() => history.push(linkUrl)}>
			<BackgroundImageContainer
				className="background-image"
				imageUrl={imageUrl}
			/>
			<ContentContainer>
				<ContentTitle>{title}</ContentTitle>
				<ContentSubtitle>SHOP NOW</ContentSubtitle>
			</ContentContainer>
		</MenuItemContainer>
	);
};

export default withRouter(MenuItem);
