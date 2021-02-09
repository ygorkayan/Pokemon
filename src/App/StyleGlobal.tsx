import { createGlobalStyle } from "styled-components";

// #e60014
// #0433ff

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
    --color: #0433ff;
  }
`;
