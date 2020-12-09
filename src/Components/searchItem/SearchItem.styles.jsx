import styled from "styled-components";

export const SearchItemContainer = styled.div`
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

export const Price = styled.span`
	width: 23%;
	margin-left: 40px;
`;
