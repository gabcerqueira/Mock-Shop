import { createGlobalStyle, css, keyframes } from "styled-components";

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

export const GlobalStyle = createGlobalStyle`




body {
	margin: 0;
	overflow-x: hidden;
	
	font-family: "Open Sans Condensed", sans-serif;
	background-color: lightgrey;
	
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
