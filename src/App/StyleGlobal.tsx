import { createGlobalStyle } from "styled-components";

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
    --colorPrimary: #e60014;
    --white: #fff;
    --gray: #e60014;
  }
`;
