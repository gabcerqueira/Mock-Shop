import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavbarContainer = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	width: 100%;
	height: 70px;
	margin: 10px;
	margin-bottom: 30px;
`;

export const LogoContainer = styled(Link)`
	cursor: pointer;
	color: black;
	height: 70%;
	width: 70px;
	padding: 25px;
	align-items: center;
`;

export const NavListContainer = styled.div`
	width: 60%;
	display: flex;
	flex-direction: row;
	flex-wrap: nowrap;
	text-align: center;
	justify-content: space-between;
	align-items: center;
`;

export const NavListItemLink = styled(Link)`
	margin: 10px;

	max-height: 50%;
	width: 100px;
	font-weight: bold;
	font-size: 20px;
	cursor: pointer;

	text-decoration: none;
	color: black;
	border-radius: 10px;
	&:hover {
		color: snow;
		background: black;
	}
`;
