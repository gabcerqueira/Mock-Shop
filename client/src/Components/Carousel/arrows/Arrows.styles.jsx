import styled, { css } from "styled-components";

const arrowStyles = css`
	cursor: pointer;
	border: none;
	height: 0px;
	padding: 0 8px;
	outline: none;

	margin-top: 140px;

	background-color: lightgrey;
	opacity: 0.7;
	transition: transform 0.3s;

	&:hover {
		opacity: 0.5;
		transform: scale(1.4);
	}
	@media screen and (max-width: 800px) {
		display: none;
	}
`;

export const RightArrowContainer = styled.button`
	${arrowStyles}
`;

export const LeftArrowContainer = styled.button`
	${arrowStyles}
`;
