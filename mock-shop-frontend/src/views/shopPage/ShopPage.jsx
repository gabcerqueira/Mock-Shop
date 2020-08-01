import React from "react";
import CollectionPreview from "../../Components/collection-preview/CollectionPreview";

import SHOP_DATA from "./shopData";

class ShopPage extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			collections: SHOP_DATA,
		};
	}

	render() {
		const { collections } = this.state;
		return (
			<div className="shop-page">
				<h1>Shop Page</h1>
				{collections.map(({ id, ...collectionProps }) => {
					return <CollectionPreview key={id} {...collectionProps} />;
				})}
			</div>
		);
	}
}

export default ShopPage;
