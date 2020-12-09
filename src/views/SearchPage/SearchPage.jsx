import React from "react";

import {
	SearchPageContainer,
	FilterContainer,
	ItemsResultContainer,
} from "./SearchPage.styles";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectSearchResultProducts } from "../../redux/product/productSelectors";

import SearchFilter from "../../Components/searchFilter/SearchFilter";
import SearchItem from "../../Components/searchItem/SearchItem";

const SearchPage = ({ searchResultProducts }) => {
	return (
		<SearchPageContainer>
			<FilterContainer></FilterContainer>
			<ItemsResultContainer>
				{searchResultProducts.map((item) => (
					<SearchItem key={item.id} item={item} />
				))}
			</ItemsResultContainer>
		</SearchPageContainer>
	);
};

const mapStateToProps = createStructuredSelector({
	searchResultProducts: selectSearchResultProducts,
});

export default connect(mapStateToProps)(SearchPage);
