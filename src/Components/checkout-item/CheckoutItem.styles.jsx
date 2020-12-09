import styled from "styled-components";

export const CheckoutItemContainer = styled.div`
	width: 100%;
	display: flex;
	min-height: 100px;
	border-bottom: 1px solid darkgrey;
	padding: 15px 0;
	font-size: 20px;
	align-items: center;
`;

export const ImageContainer = styled.div`
	width: 23%;
	padding-right: 15px;
	cursor: pointer;
`;

export const Img = styled.img`
	width: 100%;
	height: 100%;
`;

export const Name = styled.span`
	width: 20%;
`;

export const Quantity = styled.div`
	width: 20%;
	display: flex;
	flex-flow: row;
	padding-right: 0 90px;
`;

export const Arrow = styled.span`
	margin: 0 5px;
	padding: 0 5px;
	cursor: pointer;
	transition: transform 0.3s;

	&:hover {
		transform: scale(1.5);
		opacity: 0.7;
	}
`;

export const Value = styled.span`
	width: 15px;
	margin: 0 5px;
	margin-right: 2px;
`;

export const Price = styled.span`
	width: 23%;
	margin-left: 40px;
`;

export const RemoveButtonContainer = styled.div`
	padding-left: 7px;
	cursor: pointer;

	transition: transform 0.3s;

	&:hover {
		transform: scale(1.5);
		opacity: 0.7;
	}
`;

export const RemoveButton = styled.span`
	margin-left: 5px;
`;
