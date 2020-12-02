import styled from "styled-components";

export const CarouselContainer = styled.div`
	display: flex;
	flex-direction: row;
`;

export const CarouselData = styled.div`
	display: flex;
	flex-direction: row;
	transform: translate3d(0, 0, 0);
	@media screen and (max-width: 800px) {
		display: grid;
		grid-template-columns: 1fr 1fr;
		grid-gap: 15px;
	}
`;
