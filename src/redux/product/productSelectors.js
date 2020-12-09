import { createSelector } from "reselect";

const selectProductReducer = (state) => state.product;

export const selectProductRecentlyViewed = createSelector(
	[selectProductReducer],
	(product) => product.recentlyViewed
);

export const selectSearchResultProducts = createSelector(
	[selectProductReducer],
	(product) => product.searchResult
);
