import React from "react";
import {
	CollectionPreviewContainer,
	CollectionTitle,
	Preview,
} from "./CollectionPreview.styles";
import Carousel from "../Carousel/Carousel";

import "./collectionPreview.scss";

const CollectionPreview = ({ title, items }) => {
	return (
		<CollectionPreviewContainer>
			<CollectionTitle to={`/shop/${title.toLowerCase()}`}>
				{title.toUpperCase()}
			</CollectionTitle>

			<Preview>
				<Carousel data={items} />
			</Preview>
		</CollectionPreviewContainer>
	);
};

export default CollectionPreview;
