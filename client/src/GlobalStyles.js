import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

*{margin: 0}

html {
  --color-dark-blue: #080809;
  --color-hot-orange: #c27b00;
  --color-alert-info: #2e66ae;
  --color-dark-grey: #040404;
  --color-primary: #c87497;
  --color-secondary: #238db7;
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

h1{
  font-size: 1.75rem;
}

`;
