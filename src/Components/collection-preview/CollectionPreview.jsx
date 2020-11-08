import React from "react";
import CollectionItem from "../collection-item/CollectionItem";
import {
	CollectionPreviewContainer,
	CollectionTitle,
	Preview,
} from "./CollectionPreview.styles";
import "./collectionPreview.scss";

const CollectionPreview = ({ title, items }) => {
	return (
		<CollectionPreviewContainer>
			<CollectionTitle>{title.toUpperCase()}</CollectionTitle>
			<Preview>
				{items
					.filter((item, index) => index < 4)
					.map((item) => (
						<CollectionItem key={item.id} item={item} />
					))}
			</Preview>
		</CollectionPreviewContainer>
	);
};

export default CollectionPreview;
