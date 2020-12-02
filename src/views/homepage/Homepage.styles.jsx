import styled from "styled-components";
import { fadeIn } from "../../global.styles";

export const HomepageContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	margin: 40px 20px;
	${fadeIn};
`;

export const SectionsTitle = styled.h1`
	margin: auto;
	margin-top: 80px;
	font-size: 40px;

	transition: transform 0.5s;
	&:hover {
		transform: scale(1.6);
	}

	@media screen and (max-width: 800px) {
		margin: 440px auto 0px auto;
	}
`;
