import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  :root {
    --cloudy: rgb(255 255 255 / 0.666);
    --dark-grey: #303030; 
    --darker-grey: #2a2a2a;
    --grey: #404040;
  }

  ::-webkit-scrollbar {
    width: 0.25rem;
  }

  ::-webkit-scrollbar-track {
    background-color: var(--darker-grey);
  }

  ::-webkit-scrollbar-thumb {
    background-color: var(--grey);
    border-radius: 0.5rem;
  }

  body {
    * {
      box-sizing: border-box;
    }

    background-color: var(--dark-grey);
    font-family: 'Roboto Mono', sans-serif !important;
  }

  input {
    &:focus {
      outline: 2px solid rgb(255 255 255 / 0.222);
    }
  }

  .bg-cloudy {
    background-color: var(--cloudy);
  }

  .bg-grey {
    background-color: var(--grey);
  }

  .bg-dark-grey {
    background-color: var(--dark-grey);
  }

  .bg-darker-grey {
    background-color: var(--darker-grey);
  }
`;
