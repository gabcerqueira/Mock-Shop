import React from "react";

import {
	SearchBarContainer,
	SearchBarInput,
	SearchButton,
} from "./SearchBar.styles";

const SearchBar = ({ search, HandleChange }) => {
	return (
		<SearchBarContainer>
			<SearchBarInput
				placeholder={"Search"}
				value={search}
				onChange={HandleChange}
			/>
			<SearchButton>
				<i className="fas fa-search"></i>
			</SearchButton>
		</SearchBarContainer>
	);
};

export default SearchBar;
