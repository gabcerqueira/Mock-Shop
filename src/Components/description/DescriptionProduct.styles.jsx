import styled from "styled-components";
import { CustomButtonContainer } from "../custom-button/CustomButton.styles";

export const DescriptionCointainer = styled.div`
	height: 88%;
	width: 60%;
	display: flex;
	flex-flow: row wrap;
	border-radius: 5px;
	@media screen and (max-width: 800px) {
		width: 80%;
		margin: 10px 20px;
	}
`;

export const DescriptionTitle = styled.h2`
	margin: 45px 15px;
`;

export const DescriptionDetails = styled.div`
	@media screen and (max-width: 800px) {
		width: 100%;
	}
`;
export const Description = styled.div`
	margin: 10px 0px;
	margin-right: 25px;
	padding: 10px 20px;
	height: 50%;
	position: relative;
	@media screen and (max-width: 800px) {
		width: 100%;
	}
`;

export const DescriptionButtonsContainer = styled.div`
	margin: 15px 15px;
	height: 40%;
	width: 100%;
	display: grid;
	grid-template-columns: 1fr 1fr;
	grid-gap: 50px;
	margin-top: 40px;

	@media screen and (max-width: 800px) {
		width: 80%;
		height: 20%;
		margin: 5px auto 20px auto;
		grid-template-columns: 1fr;
		grid-gap: 10px;
	}
`;

export const AddButton = styled(CustomButtonContainer)`
	margin: 10px auto;
	width: 60%;
`;

export const CheckOutButton = styled(CustomButtonContainer)`
	margin: 10px auto;
	width: 60%;
`;
