import styled from "styled-components";

export const SignInContainer = styled.div`
	width: 380px;
	display: flex;
	flex-direction: column;

	@media screen and (max-width: 800px) {
		width: 300px;
	}
`;

export const SignInTitle = styled.h2`
	margin: 10px 0;
`;

export const SignInButtons = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	margin: 0 10px;
	@media screen and (max-width: 800px) {
		flex-direction: column;
	}
`;
