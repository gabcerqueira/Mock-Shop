import styled from "styled-components";
import { Link } from "react-router-dom";

export const CollectionPreviewContainer = styled.div`
	display: flex;
	flex-direction: column;
	margin-bottom: 30px;
`;

export const CollectionTitle = styled(Link)`
	font-size: 28px;
	margin-bottom: 25px;
	width: 30px;
	&:hover {
		color: grey;
	}
`;

export const Preview = styled.div`
	display: flex;
	justify-content: space-between;
`;
