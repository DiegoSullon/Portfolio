import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
    /* font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif; */
  }
  *, *::before, *::after {
    box-sizing: inherit;
  }
  body {
    height: 100vh;
    margin: 0;
    overscroll-behavior: none;
    width: 100%;

    font-size: 1.2em;
    display: flex;
    flex-direction: column;
    background-color: #08222e;
  }
  li {
  list-style: none;
  }
  a {
    text-decoration: none;
    color: black;
  }
  h1 {
    font-size: 1.8em;
  }
  h2 {
    font-size: 2.5rem;
  }
  img {
    width: 100%;
    height: auto;
  }
  /* Nav scroll */
  .bgcolor {
    background-color: rgba(15, 71, 97, 0.8);
  }
`
