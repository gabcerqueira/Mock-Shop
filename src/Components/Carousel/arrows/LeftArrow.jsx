import React from "react";

import { LeftArrowContainer } from "./Arrows.styles";

const RightArrow = ({ goToPrev, dataLength }) => (
	<LeftArrowContainer onClick={goToPrev}>
		{dataLength > 4 ? (
			<span className="fas fa-arrow-circle-left fa-2x"></span>
		) : null}
	</LeftArrowContainer>
);

export default RightArrow;
