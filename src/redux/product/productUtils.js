export const addItemToRecentlyViewed = (recentlyViewed, productToAdd) => {
	const existingProductToAdd = recentlyViewed.find(
		(product) => product.id === productToAdd.id
	);
	if (existingProductToAdd) {
		const filteredArray = recentlyViewed.filter(
			(product) => product.id !== productToAdd.id
		);
		filteredArray.unshift(productToAdd);
		return filteredArray;
	}
	recentlyViewed.unshift(productToAdd);
	return recentlyViewed;
};
