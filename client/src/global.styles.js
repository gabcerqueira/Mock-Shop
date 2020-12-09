import { createGlobalStyle, css, keyframes } from "styled-components";
import styled from "styled-components";
const fadeInAnimation = keyframes`
0% {
	opacity: 0;
}
100% {
	opacity: 1;
}
`;

export const fadeIn = css`
	opacity: 0;
	animation-name: ${fadeInAnimation};
	animation-duration: 2s;
	animation-fill-mode: forwards;
`;

export const fadeCarousel = css`
	opacity: 0;
	animation-name: ${fadeInAnimation};
	animation-duration: 0.25s;
	animation-fill-mode: forwards;
`;

export const AppContainer = styled.div`
	max-width: 1060px;
	margin: 10px auto 20px;
	padding: 20px 10px;
`;

export const GlobalStyle = createGlobalStyle`

html{
	margin: 0;
	height: 100%;
}


body {
	margin: 0;
	
	
	font-family: "Open Sans Condensed", sans-serif;
	
	background-color: rgb(236, 236, 236);
	
	${fadeIn};
	

  @media screen and (max-width: 800px) {
    padding: 0px;
    
  }
}

a {
	text-decoration: none;
	color: black;
}

* {
	box-sizing: border-box;
}

`;
