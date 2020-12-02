import React from "react";

import { RightArrowContainer } from "./Arrows.styles";

const RightArrow = ({ goToNext }) => (
	<RightArrowContainer onClick={goToNext}>
		<span className="fas fa-arrow-circle-right fa-2x"></span>
	</RightArrowContainer>
);

export default RightArrow;
