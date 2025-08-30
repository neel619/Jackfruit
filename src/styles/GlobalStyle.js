import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  :root {
    --primary-color: #228B22;
    --secondary-color: #004d40;
    --background-color: #f9f9f9;
    --text-color: #333;
    --white: #ffffff;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Helvetica', 'Arial', sans-serif;
    line-height: 1.6;
    background-color: var(--background-color);
    color: var(--text-color);
  }

  .container {
    width: 90%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 2rem;
  }

  section {
    padding: 4rem 0;
  }

  h1, h2, h3 {
    color: var(--primary-color);
    margin-bottom: 1rem;
  }

  img {
    max-width: 100%;
    height: auto;
  }

  a {
    color: var(--primary-color);
    text-decoration: none;
    transition: color 0.3s ease;

    &:hover {
      color: var(--secondary-color);
    }
  }
`;