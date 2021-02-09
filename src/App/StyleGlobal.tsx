import { createGlobalStyle } from "styled-components";

// #e60014
// #022adf
// #4d1d78

export const StyleGlobal = createGlobalStyle`
  * {
    margin: 0px;
    padding: 0px;
    box-sizing: border-box;
    font-family: Helvetica, Arial, sans-serif;
  } 

  a {
    text-decoration: none;
  }

  body {
    background-color: #eaeaea;
  }

  :root {
    --color: #e60014;
  }
`;
