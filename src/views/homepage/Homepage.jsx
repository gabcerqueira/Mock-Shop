import React from "react";
import Directory from "../../Components/directory/Directory";
import { HomepageContainer, SectionsTitle } from "./Homepage.styles";
import HeaderImage from "../../Components/header-image/HeaderImage";
import headerImageData from "../../data/headerImageData";

import { createClient } from "pexels";

const Homepage = () => {
	const imageUrl = headerImageData.home;

	/*
	const client = createClient(
		"563492ad6f917000010000017bcf558a7a4544e9b41af89f788ed08c"
	);
	const query = "Men";

	client.photos
		.search({ query, per_page: 15 })
		.then((photos) => console.log(photos));

		*/

	return (
		<HomepageContainer>
			<HeaderImage imageUrl={imageUrl} large>
				<h1>Mock Shop Inc</h1>
				<p>Enjoy your life with fashion!</p>
			</HeaderImage>

			<SectionsTitle>Sections</SectionsTitle>
			<Directory />
		</HomepageContainer>
	);
};

export default Homepage;
