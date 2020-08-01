import React from "react";
import { withRouter } from "react-router-dom";
import "./menuItem.scss";
const MenuItem = ({ title, imageUrl, key, size, history, linkUrl, match }) => {
	return (
		<div className={` ${size} menu-item`} onClick={() => history.push(linkUrl)}>
			{console.log(match)}
			<div
				className="background-image"
				style={{
					backgroundImage: `url(${imageUrl})`,
				}}
			/>
			<div className="content">
				<h1 className="title">{title}</h1>
				<span className="subtitle">SHOP NOW</span>
			</div>
		</div>
	);
};

export default withRouter(MenuItem);