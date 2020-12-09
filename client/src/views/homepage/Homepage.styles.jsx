import styled from "styled-components";
import { fadeIn } from "../../global.styles";

export const HomepageContainer = styled.div`
	display: flex;
	flex-direction: column;

	margin: 40px 20px;
	${fadeIn};
`;

export const SectionsContainer = styled.div`
	margin: 640px 0px 20px;
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
`;

export const SectionsTitle = styled.h1`
	margin: 40px 40px 10px;

	font-size: 40px;
	width: 10%;
	transition: transform 0.5s;
	&:hover {
		transform: scale(1.6);
	}

	@media screen and (max-width: 800px) {
		margin: 440px auto 0px auto;
	}
`;
