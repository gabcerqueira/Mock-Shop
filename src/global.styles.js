import { createGlobalStyle, keyframes } from "styled-components";

export const GlobalStyle = createGlobalStyle`




body {
	margin: 0;
	
	font-family: "Open Sans Condensed", sans-serif;
	background-color: lightgrey;
	

	

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
