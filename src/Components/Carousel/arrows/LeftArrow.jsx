import React from "react";

import { LeftArrowContainer } from "./Arrows.styles";

const RightArrow = ({ goToPrev }) => (
	<LeftArrowContainer onClick={goToPrev}>
		<span className="fas fa-arrow-circle-left fa-2x"></span>
	</LeftArrowContainer>
);

export default RightArrow;
