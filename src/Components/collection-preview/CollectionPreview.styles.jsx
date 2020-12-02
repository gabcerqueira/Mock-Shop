import styled from "styled-components";
import { Link } from "react-router-dom";
import { fadeIn } from "../../global.styles";
export const CollectionPreviewContainer = styled.div`
	display: flex;
	flex-direction: column;
	margin: auto;
	margin-bottom: 30px;

	@media screen and (max-width: 800px) {
		align-items: center;
		margin: 20px auto;
	}
`;

export const CollectionTitle = styled(Link)`
	font-size: 28px;
	margin-bottom: 25px;
	width: 30px;

	transition: transform 0.5s;
	&:hover {
		transform: scale(1.6);
	}

	@media screen and (max-width: 800px) {
		margin: 240px 70px 60px 0px;
		font-size: 40px;
	}
`;

export const Preview = styled.div`
	display: flex;
	justify-content: space-between;
	${fadeIn}

	@media screen and (max-width: 800px) {
		margin: 20px auto 20px auto;
	}
`;
