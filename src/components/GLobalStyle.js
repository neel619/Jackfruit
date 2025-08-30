import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  :root {
    /* Color Palette - Natural, earthy tones with green accents for jackfruit theme */
    --primary-color: #2E7D32; /* Deep forest green */
    --secondary-color: #8BC34A; /* Lighter green */
    --accent-color: #FFC107; /* Warm yellow/gold like ripe jackfruit */
    --dark-green: #1B5E20; /* For hover states */
    --light-green: #DCEDC8; /* Light background */
    --cream: #FFF8E1; /* Cream color for backgrounds */
    --white: #FFFFFF;
    --grey-light: #F5F5F5;
    --grey: #9E9E9E;
    --text-color: #424242;
    --text-light: #757575;
    --shadow: rgba(0, 0, 0, 0.1);
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Poppins', 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', sans-serif;
    color: var(--text-color);
    line-height: 1.6;
    background-color: var(--cream);
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: 'Montserrat', 'Segoe UI', Roboto, sans-serif;
    font-weight: 700;
    margin-bottom: 1rem;
    color: var(--primary-color);
  }

  p {
    margin-bottom: 1rem;
  }

  a {
    text-decoration: none;
    color: var(--primary-color);
    transition: color 0.3s ease;
    
    &:hover {
      color: var(--dark-green);
    }
  }

  img {
    max-width: 100%;
    height: auto;
    display: block;
  }

  button {
    cursor: pointer;
    background: var(--primary-color);
    color: white;
    border: none;
    padding: 0.75rem 1.5rem;
    border-radius: 4px;
    font-weight: 600;
    transition: background 0.3s ease;
    
    &:hover {
      background: var(--dark-green);
    }
  }

  .container {
    width: 90%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 1rem;
  }

  section {
    padding: 5rem 0;
  }

  /* Add some spacing to account for fixed header */
  main {
    padding-top: 80px;
  }
`;

export default GlobalStyle;