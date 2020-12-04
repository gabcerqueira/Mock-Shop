import React, { useState } from "react";

import { CarouselContainer, CarouselData } from "./Carousel.styles";
import RightArrow from "./arrows/RightArrow";
import LeftArrow from "./arrows/LeftArrow";
import CollectionItem from "../collection-item/CollectionItem";

const CAROUSEL = {
	INITIAL_FIRST_INDEX: 0,
	INITIAL_LAST_INDEX: 4,
	INTERVAL: 4,
};

const Carousel = ({ data }) => {
	const [firstIndex, setFirstIndex] = useState(CAROUSEL.INITIAL_FIRST_INDEX);
	const [lastIndex, setLastIndex] = useState(CAROUSEL.INITIAL_LAST_INDEX);
	const interval = CAROUSEL.INTERVAL;

	const goToNext = () => {
		if (lastIndex + interval > data.length) {
			setFirstIndex(data.length - interval);
			setLastIndex(data.length);
		} else {
			setFirstIndex(firstIndex + interval);
			setLastIndex(lastIndex + interval);
		}
	};

	const goToPrev = () => {
		if (firstIndex - interval < CAROUSEL.INITIAL_FIRST_INDEX) {
			setFirstIndex(CAROUSEL.INITIAL_FIRST_INDEX);
			setLastIndex(CAROUSEL.INITIAL_FIRST_INDEX + interval);
		} else {
			setFirstIndex(firstIndex - interval);
			setLastIndex(lastIndex - interval);
		}
	};

	return (
		<CarouselContainer>
			<LeftArrow goToPrev={goToPrev} dataLength={data.length} />
			<CarouselData>
				{data
					.filter((item, index) => index >= firstIndex && index <= lastIndex)
					.filter((item, index) => index < interval)
					.map((item) => (
						<CollectionItem key={item.id} item={item} />
					))}
			</CarouselData>
			<RightArrow goToNext={goToNext} dataLength={data.length} />
		</CarouselContainer>
	);
};

export default Carousel;
