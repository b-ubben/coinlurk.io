import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  :root {
    --cloudy: rgb(255 255 255 / 0.666);
  }

  body {
    * {
      box-sizing: border-box;
    }

    font-family: 'Roboto Mono', sans-serif !important;
  }

  .bg-cloudy {
    background-color: var(--cloudy);
  }
`;
