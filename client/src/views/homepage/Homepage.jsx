import React from "react";
import Directory from "../../Components/directory/Directory";
import {
	HomepageContainer,
	SectionsTitle,
	SectionsContainer,
} from "./Homepage.styles";
import HeaderImage from "../../Components/header-image/HeaderImage";
import headerImageData from "../../data/headerImageData";
import RecentlyViewed from "../../Components/RecentlyViewed/RecentlyViewed";
const Homepage = () => {
	const imageUrl = headerImageData.home;

	return (
		<HomepageContainer>
			<HeaderImage imageUrl={imageUrl} large>
				<h1>Mock Shop Inc</h1>
				<p>Enjoy your life with fashion!</p>
			</HeaderImage>
			<SectionsContainer>
				<SectionsTitle>Sections</SectionsTitle>
				<Directory />
			</SectionsContainer>
			<RecentlyViewed />
		</HomepageContainer>
	);
};

export default Homepage;
