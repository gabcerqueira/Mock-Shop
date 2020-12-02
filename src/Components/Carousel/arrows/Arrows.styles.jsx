import styled, { css } from "styled-components";

const arrowStyles = css`
	cursor: pointer;
	border: none;
	height: 0px;
	padding: 0 15px;
	outline: none;

	margin-top: 140px;

	background-color: lightgrey;
	opacity: 0.7;
	transition: transform 0.3s;

	&:hover {
		opacity: 0.5;
		transform: scale(1.3);
	}
`;

export const RightArrowContainer = styled.button`
	${arrowStyles}
`;

export const LeftArrowContainer = styled.button`
	${arrowStyles}
`;
