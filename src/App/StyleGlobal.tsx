import { createGlobalStyle } from "styled-components";

interface Color {
  color: string
}

export const StyleGlobal = createGlobalStyle<Color>`
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
    --color: ${props => props.color};
  }
`;
