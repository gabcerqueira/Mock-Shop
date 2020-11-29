import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavbarContainer = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	width: 100%;
	height: 70px;
	margin: 10px;
	margin-bottom: 10px;

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
	padding: 25px;

	align-items: center;

	@media screen and (max-width: 800px) {
		width: 50px;
		padding: 0px;
	}
`;

export const NavListContainer = styled.div`
	width: 60%;
	display: flex;
	flex-direction: row;
	flex-wrap: nowrap;
	text-align: center;
	justify-content: space-between;
	align-items: center;
	padding: 0 20px;

	@media screen and (max-width: 800px) {
		width: 80%;
		margin-right: 20px;
	}
`;

export const NavListContainerToggled = styled.div`
	width: 60%;
	height: 300px;

	display: flex;
	flex-direction: column;
	flex-wrap: nowrap;
	text-align: right;
	justify-content: space-between;
	align-items: flex-end;
	background-color: lightgreen;

	@media screen and (max-width: 800px) {
		width: 80%;
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

	&:hover {
		border-bottom: 2px solid black;
	}
`;
