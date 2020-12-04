import styled from "styled-components";

export const RecentlyContainer = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;

	margin: 10px 0px 20px;

	@media screen and (max-width: 800px) {
		margin: 50px auto;
	}
`;

export const RecentlyTitle = styled.h2`
	font-size: 36px;

	margin: 10px 20px 40px;
	align-self: center;
	width: 20%;
	transition: transform 0.5s;
	&:hover {
		transform: scale(1.6);
	}
`;

export const RecentlyData = styled.div`
	align-items: center;
`;
