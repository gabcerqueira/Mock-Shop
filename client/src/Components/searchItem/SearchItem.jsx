import React from "react";

import {
	SearchItemContainer,
	ImageContainer,
	Img,
	Name,
	Price,
} from "./SearchItem.styles";

const SearchItem = ({ item }) => {
	const { id, name, price, imageUrl } = item;
	return (
		<SearchItemContainer>
			<ImageContainer>
				<Img src={imageUrl} alt="item" />
			</ImageContainer>
			<Name>{id}</Name>
			<Name>{name}</Name>
			<Price>{price}</Price>
		</SearchItemContainer>
	);
};

export default SearchItem;
