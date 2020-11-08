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
`;

export const Img = styled.img`
	width: 100%;
	height: 100%;
`;

export const Name = styled.span`
	width: 23%;
`;

export const Quantity = styled.div`
	width: 23%;
	display: flex;
	flex-flow: row;
`;

export const Arrow = styled.span`
	margin: 0 5px;
	cursor: pointer;
`;

export const Value = styled.span``;

export const Price = styled.span`
	width: 23%;
`;

export const RemoveButtonContainer = styled.div`
	padding-left: 12px;
	cursor: pointer;
`;

export const RemoveButton = styled.span``;
