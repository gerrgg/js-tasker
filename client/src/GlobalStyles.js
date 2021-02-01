import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`


html {

  --color-dark-blue: #080809;
  --color-hot-orange: #c27b00;
  --color-alert-info: #2e66ae;
  --color-dark-grey: #040404;
  --color-pretty-pink: #c87497;
  --color-redish-orange: #d2471c;
}

body {
  margin: 0;

  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
    monospace;
}

`;
