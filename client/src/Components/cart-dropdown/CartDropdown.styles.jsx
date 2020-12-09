import styled from "styled-components";
import { CustomButtonContainer } from "../custom-button/CustomButton.styles";

export const CartDropdownContainer = styled.div`
	position: absolute;
	width: 240px;
	height: 340px;
	display: flex;
	flex-direction: column;
	padding: 20px;
	border: 1px solid black;
	background-color: white;
	top: 100px;
	right: 48px;
	z-index: 5;
`;

export const CartItemsContainer = styled.div`
	height: 240px;
	display: flex;
	flex-direction: column;
	overflow: scroll;
`;

export const CartEmptyMessage = styled.span`
	font: bold;
	font-size: 24px;
	margin: 50px auto;
`;

export const CheckoutButton = styled(CustomButtonContainer)`
	margin-top: auto;
`;
