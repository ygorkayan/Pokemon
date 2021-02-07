import { createGlobalStyle } from "styled-components";

export const StyleGlobal = createGlobalStyle`
  * {
    margin: 0px;
    padding: 0px;
    box-sizing: border-box;
    font-family: Helvetica, Arial, sans-serif;
  }

  body {
    background-color: #eaeaea;
  }

  :root {
    --red: #e60014;
    --white: #fff;
    --gray: rgb(102, 102, 102);
  }
`;
