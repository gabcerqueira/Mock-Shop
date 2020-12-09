import styled from "styled-components";

export const CarouselContainer = styled.div`
	display: flex;
	flex-direction: row;
	margin: 10px 40px 10px;
`;

export const CarouselData = styled.div`
	display: flex;
	flex-direction: row;

	@media screen and (max-width: 800px) {
		display: grid;
		grid-template-columns: 1fr 1fr;
		grid-gap: 15px;
	}
`;
