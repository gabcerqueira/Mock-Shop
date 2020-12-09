import React from "react";

import {
	RecentlyContainer,
	RecentlyTitle,
	RecentlyData,
} from "./RecentlyViewed.styles";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectProductRecentlyViewed } from "../../redux/product/productSelectors";
import Carousel from "../Carousel/Carousel";
const RecentlyViewed = ({ recentlyViewed }) => {
	return (
		<RecentlyContainer>
			{recentlyViewed.length > 1 ? (
				<>
					<RecentlyTitle>Recently Viewed</RecentlyTitle>
					<RecentlyData>
						<Carousel data={recentlyViewed} />
					</RecentlyData>
				</>
			) : null}
		</RecentlyContainer>
	);
};

const mapStateToProps = createStructuredSelector({
	recentlyViewed: selectProductRecentlyViewed,
});

export default connect(mapStateToProps)(RecentlyViewed);
