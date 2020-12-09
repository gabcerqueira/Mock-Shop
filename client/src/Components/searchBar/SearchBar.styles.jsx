import styled from "styled-components";

export const SearchBarContainer = styled.div`
	i {
		opacity: 0.4;

		margin-right: 30px;
	}
`;

export const SearchBarInput = styled.input`
	width: 15rem;
	background: lightgrey;
	border: none;
	border-bottom: 1px solid grey;
	padding: 0.5rem;
	outline: none;

	&:focus {
		outline: none;
	}
`;

export const SearchButton = styled.button`
	width: 32px;
	height: 31px;

	outline: none;

	background: #f2f1f9;
	background: lightgrey;
	border: none;
	border-bottom: 1px solid grey;
	cursor: pointer;
	&:hover {
		background: lightgrey;
		i {
			opacity: 0.2;
		}
	}
`;
