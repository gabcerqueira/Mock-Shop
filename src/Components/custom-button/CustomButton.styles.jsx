import styled, { css } from "styled-components";

const regularButton = css`
	background-color: black;
	color: white;
	border: none;
	&:hover {
		background-color: white;
		color: black;
		border: 1px solid black;
	}
`;

const invertedButton = css`
	background-color: white;
	color: black;
	border: 1px solid black;

	&:hover {
		background-color: black;
		color: white;
		border: none;
	}
`;

const googleSignIn = css`
	background-color: #4285f4;
	color: snow;
	border: none;

	&:hover {
		background-color: #357ae8;
	}
`;

const getButtonStyles = (props) => {
	if (props.isGoogleSignIn) {
		return googleSignIn;
	}

	return props.inverted ? invertedButton : regularButton;
};

export const CustomButtonContainer = styled.button`
	min-width: 165px;
	width: auto;
	height: 50px;
	letter-spacing: 0.5px;
	line-height: 50px;
	padding: 0 35px 0 35px;
	font-size: 15px;
	background-color: black;
	color: white;
	text-transform: uppercase;
	font-family: "Open Sans Condensed";
	font-weight: bolder;
	border: none;
	cursor: pointer;
	display: flex;
	justify-content: center;

	@media screen and (max-width: 800px) {
		width: 70%;
		margin: 10px 5px;
	}

	${getButtonStyles}
`;
