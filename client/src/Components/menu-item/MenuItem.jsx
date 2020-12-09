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
	const handleHistory = () => {
		if (match.path === "/shop/:collectionId") {
			return history.push(`/shop/${title.toLowerCase()}`);
		} else {
			return history.push(linkUrl);
		}
	};
	return (
		<MenuItemContainer size={size} onClick={handleHistory}>
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
