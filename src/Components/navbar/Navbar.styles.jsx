import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavbarContainer = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	width: 100%;
	height: 150px;
	margin: 0px;
	background: lightgrey;

	@media screen and (max-width: 800px) {
		height: 60px;
		padding: 10px;
		margin-bottom: 20px;
	}
`;

export const LogoContainer = styled(Link)`
	cursor: pointer;
	color: black;
	height: 70%;
	width: 70px;
	padding: 50px 80px 20px;
	@media screen and (max-width: 800px) {
		width: 50px;
		padding: 0px;
	}
`;

export const SearchBarContainer = styled.div`
	margin: auto;
`;

export const NavListContainer = styled.div`
	width: 60%;
	display: flex;
	flex-direction: row;
	flex-wrap: nowrap;
	text-align: center;
	justify-content: space-between;
	align-items: center;
	padding: 0 40px;

	@media screen and (max-width: 800px) {
		width: 80%;
		margin-right: 20px;
	}
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

	:after {
		content: "";
		display: block;
		margin: auto;
		height: 2px;
		width: 0px;

		transition: width 0.3s;
	}

	&:hover {
		&:after {
			width: 100%;
			background: black;
		}
	}
`;
