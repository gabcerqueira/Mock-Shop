import styled, { keyframes, css } from "styled-components";
import { CustomButtonContainer } from "../custom-button/CustomButton.styles";
import { fadeCarousel } from "./../../global.styles";
export const CollectionItemContainer = styled.div`
	width: 20vw;
	display: flex;
	flex-direction: column;
	height: 350px;
	align-items: center;
	position: relative;
	margin: 0 5px;
	${fadeCarousel};

	&:hover {
		.image {
			opacity: 0.8;
		}
		button {
			opacity: 0.85;
			display: flex;
		}
	}

	@media screen and (max-width: 800px) {
		width: 40vw;
		&:hover {
			.image {
				opacity: unset;
			}
		}
	}
`;

export const AddButton = styled(CustomButtonContainer)`
	width: 80%;
	opacity: 0.7;
	position: absolute;
	top: 245px;
	display: none;
	@media screen and (max-width: 800px) {
		display: block;
		padding: 0 10px;
		min-width: unset;
		opacity: 0.6;
	}
`;

export const BackgroundImage = styled.div`
	width: 100%;
	height: 95%;
	background-size: cover;
	background-position: center;
	margin-bottom: 5px;
	background-image: ${({ imageurl }) => `url(${imageurl})`};
	cursor: pointer;

	&:hover {
		-webkit-box-shadow: 2px 2px 11px 3px rgba(0, 0, 0, 0.46);
		-moz-box-shadow: 2px 2px 11px 3px rgba(0, 0, 0, 0.46);
		box-shadow: 2px 2px 11px 3px rgba(0, 0, 0, 0.46);
	}
`;

export const CollectionFooterContainer = styled.div`
	width: 100%;
	height: 5%;
	display: flex;
	justify-content: space-between;
	font-size: 18px;
	margin-bottom: 20px;
`;

export const NameContainer = styled.span`
	width: 85%;
	margin-bottom: 15px;
	@media screen and (max-width: 800px) {
		width: 80%;
	}
`;

export const PriceContainer = styled.span`
	width: 15%;
	text-align: right;

	@media screen and (max-width: 800px) {
		width: 20%;
		margin: 0px 10px;
	}
`;
const fastFadeIn = keyframes`
	0%,
  100% {
    opacity: 0;
  }
  30%,
  70% {
    opacity: 1;
	}
	`;

const fadeInFast = css`
	opacity: 0;
	animation-name: ${fastFadeIn};
	animation-duration: 0.5s;
	animation-fill-mode: forwards;
`;
const addedStyle = css`
	display: block;
	height: 88%;
	width: 100%;
	position: absolute;
	z-index: 10;
	margin-bottom: 5px;
	background-color: rgba(0, 190, 190, 0.7);

	span {
		position: absolute;
		top: 40%;
		left: 50%;
		transform: translateX(-50%);
		color: #fff;
		font-size: 40px;
	}
`;

const setAdded = ({ added }) => (added ? addedStyle : null);

export const AddedShow = styled.div`
	display: none;

	${setAdded}

	${fadeInFast};
`;
