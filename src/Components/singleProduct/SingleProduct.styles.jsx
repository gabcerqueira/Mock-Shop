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
	height: 90%;
	align-items: flex-start;

	background-color: white;
	border-radius: 20px;
	${boxShadow};
	margin: 20px 10px;
`;

export const SingleProductView = styled.div`
	margin: 5px;
	height: 90%;
	width: 50%;
	display: flex;
	flex-direction: column;
	border-radius: 10px;
`;

export const SingleProductDetail = styled.div`
	height: 20%;
	width: 65%;
	margin: 5px 40px;
	display: flex;
	flex-flow: row nowrap;
	justify-content: space-between;
`;

export const Price = styled.span`
	font-size: 25px;
	margin: 5px;
`;
export const Name = styled.span`
	font-size: 25px;
	margin: 5px;
`;

export const BackgroundImage = styled.div`
	width: 65%;
	height: 75%;
	margin: 50px 40px;
	background-size: cover;
	background-position: center;
	margin-bottom: 5px;
	background-image: ${({ imageurl }) => `url(${imageurl})`};
	cursor: pointer;

	@media screen and (max-width: 800px) {
		width: 100px;
		height: 150px;
	}
`;
