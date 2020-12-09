import styled from "styled-components";

export const DirectoryMenu = styled.div`
	display: flex;
	width: 90%;
	flex-wrap: wrap;
	justify-content: space-between;
	margin: 40px 10px;

	@media screen and (max-width: 800px) {
		margin: 50px auto;
		display: grid;
		grid-template-columns: 1fr 1fr;
		grid-gap: 10px;
	}
`;
