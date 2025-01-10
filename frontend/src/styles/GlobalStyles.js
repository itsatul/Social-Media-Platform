import {createGlobalStyle} from "styled-components";

const GlobalStyles = createGlobalStyle`
  /* Import Roboto Font */
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap');

  /* Universal Reset and Box-Sizing */
  *, *::before, *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  /* Global Styles */
  body {
    font-family: 'Roboto', sans-serif; /* Apply Roboto font */
    font-size: 1rem;
  }

  #root{
    max-width: 100vw;
    min-height: 100vh;
  }

  a {
    text-decoration: none;
  }

  ul {
    list-style: none;
  }
`;

export default GlobalStyles;
