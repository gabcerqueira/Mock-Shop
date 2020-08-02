import React from "react";
import CollectionPreview from "../../Components/collection-preview/CollectionPreview";
import Navbar from "../../Components/navbar/Navbar";
import "./shopPage.scss";
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
				<Navbar />
				<h1>Collections</h1>
				{collections.map(({ id, ...collectionProps }) => {
					return <CollectionPreview key={id} {...collectionProps} />;
				})}
			</div>
		);
	}
}

export default ShopPage;
