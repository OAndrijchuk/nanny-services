import { createGlobalStyle } from 'styled-components';

export const Global = createGlobalStyle`
body {
  font-family: 'HelveticaNeue-500',  sans-serif;
  font-weight: 500;
  font-style: normal;
  font-size: 16px;
  color: ${({ theme }) => theme.colors.greyText};
  /* background: ${({ theme }) => theme.background.main}; */
  transition: ${({ theme }) => theme.transition};
}

p,
h1,
h2,
h3,
h4,h5,h6 {
    padding: 0;
    margin: 0;
}

img {
    display: block;
    width:100%;
}

ul,li {
    margin: 0;
    padding: 0;
    list-style: none;
}

a {
    text-decoration: none;
}

button {
    background-color: transparent;
    border: none;
    &:hover {
        cursor: pointer;
    }
}
  
`;
