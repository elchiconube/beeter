import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed, 
  figure, figcaption, footer, header, hgroup, 
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    vertical-align: baseline;
  }

  *, *:after, *:before {
      box-sizing: inherit;
  }
  

  article, aside, details, figcaption, figure, 
  footer, header, hgroup, menu, nav, section {
    display: block;
  }
  body {
    line-height: 1;
  }
  ol, ul {
    list-style: none;
    padding:0;
    margin: 0;
  }
  blockquote, q {
    quotes: none;
  }
  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  body {
    background-color: ${({ theme }) => theme.body};
    font-family: "Roboto", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";    
    transition-property: background-color, color;
    transition-duration: 300ms;
    line-height: 1.5;
    font-size: 14px;
  }

  h1{
    font-size: 36px;
    font-weight: 500;
  }

  h2{
    font-size: 32px;
    font-weight: 500;
  }

  h3{
    font-size: 24px;
    font-weight: 500;
  }

  h4{
    font-size: 16px;
    font-weight: 500;
  }

  h5 {
    font-size: 12px;
    font-weight: 500;
  }

  img{
    max-width: 100%;
  }

  button {
    background: transparent;
    border: 0;
    appearance: none;
    padding: 0;
    margin: 0;
    cursor: pointer;
    appearance: none;
  }

  a {
    text-decoration: none;
    color: inherit;
    font-weight: 500;
    display: inline-block;
  }

  `;
