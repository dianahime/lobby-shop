import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  :root {
  --base: #f7fff7;
  --text: #1a535c;
  --card: #1a535c10;
}

  body {
  height: 100vh;
  background-color: var(--base);
  color: var(--text);
  font-family: 'Lato', sans-serif;
  padding: 0 10px;
  margin-bottom: 100px;
}
`
