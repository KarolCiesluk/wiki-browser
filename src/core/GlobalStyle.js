import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
  }

  *, ::after, ::before {
    box-sizing: inherit;
    max-width: 100%;
  }

  body {
    font-family: 'Roboto', sans-serif;
    overflow-wrap: break-word;

    @media (max-width: 400px) {
      font-size: 14px;
    }
  }

  table {
    display: block;
    overflow: auto;
  }
`;

export default GlobalStyle;