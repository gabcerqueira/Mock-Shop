import React from "react";

import { RightArrowContainer } from "./Arrows.styles";

const RightArrow = ({ goToNext, dataLength }) => (
	<RightArrowContainer onClick={goToNext}>
		{dataLength > 4 ? (
			<span className="fas fa-arrow-circle-right fa-2x"></span>
		) : null}
	</RightArrowContainer>
);

export default RightArrow;
