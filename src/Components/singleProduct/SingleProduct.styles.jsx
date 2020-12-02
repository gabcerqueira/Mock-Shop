import styled, { css } from "styled-components";

export const boxShadow = css`
	-webkit-box-shadow: 4px 8px 44px -5px rgba(0, 0, 0, 0.75);
	-moz-box-shadow: 4px 8px 44px -5px rgba(0, 0, 0, 0.75);
	box-shadow: 4px 8px 44px -5px rgba(0, 0, 0, 0.75);
`;

export const SingleProductContainer = styled.div`
	width: 100%;
	display: flex;
	flex-direction: row;
	height: 100vh;
	align-items: flex-start;

	background-color: white;
	border-radius: 20px;
	${boxShadow};
	margin: 20px 40px;

	@media screen and (max-width: 800px) {
		margin: 40px auto;
		height: 150vh;
		display: flex;
		flex-direction: column;
		align-items: center;
	}
`;

export const SingleProductView = styled.div`
	margin: 5px auto;
	height: 85%;
	width: 80%;
	display: flex;
	flex-direction: column;
	border-radius: 10px;
	@media screen and (max-width: 800px) {
		height: 60%;
	}
`;

export const SingleProductDetail = styled.div`
	height: 20%;
	width: 80%;
	margin: 5px 20px;
	display: flex;
	flex-flow: row nowrap;
	justify-content: space-between;
	@media screen and (max-width: 800px) {
		margin: 10px auto - 5px;
		height: 20%;
		width: 90%;
	}
`;

export const Price = styled.span`
	font-size: 25px;
	margin: 5px auto;
`;
export const Name = styled.span`
	font-size: 25px;
	margin: 5px auto;
`;

export const BackgroundImage = styled.div`
	width: 65%;
	height: 75%;
	margin: 50px auto;
	background-size: cover;
	background-position: center;
	margin-bottom: 5px;
	background-image: ${({ imageurl }) => `url(${imageurl})`};
	cursor: pointer;

	@media screen and (max-width: 800px) {
		width: 80%px;
		height: 400px;
	}
`;
