import React from "react";
import { useState } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import {
	SearchBarContainer,
	SearchBarInput,
	SearchButton,
} from "./SearchBar.styles";
import { searchProductsStart } from "../../actions/productActions";

const SearchBar = ({ searchProductsStart, history }) => {
	const [searchKey, setSearch] = useState("");

	const handleSubmit = async (e) => {
		e.preventDefault();
		await searchProductsStart(searchKey.toLowerCase());
		setSearch("");
	};

	return (
		<SearchBarContainer as="form" onSubmit={handleSubmit}>
			<SearchBarInput
				placeholder={"Search"}
				value={searchKey}
				onChange={(e) => setSearch(e.target.value)}
			/>
			<SearchButton
				type="submit"
				onClick={() => {
					history.push(`/search/${searchKey}`);
				}}
			>
				<i className="fas fa-search"></i>
			</SearchButton>
		</SearchBarContainer>
	);
};

const mapDispatchToProps = (dispatch) => ({
	searchProductsStart: (searchKey) => dispatch(searchProductsStart(searchKey)),
});

export default connect(null, mapDispatchToProps)(withRouter(SearchBar));
