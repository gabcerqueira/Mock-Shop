import styled from "styled-components";

export const SingleProductContainer = styled.div`
	width: 40vw;
	display: flex;
	flex-direction: column;
	height: 70vh;
	align-items: center;
	position: relative;
	margin: auto;
	margin-top: 100px;
`;

export const SingleProductDetail = styled.div`
	height: 40%;
`;

export const Price = styled.span`
	font-size: 35px;
`;
export const Name = styled.span`
	font-size: 35px;
`;

export const BackgroundImage = styled.div`
	width: 50%;
	height: 60%;
	background-size: cover;
	background-position: center;
	margin-bottom: 5px;
	background-image: ${({ imageurl }) => `url(${imageurl})`};
	cursor: pointer;
`;
