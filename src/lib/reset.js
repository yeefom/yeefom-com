import { css } from '@emotion/core'

const ResetStyles = () => {
  return css`        
    *,
    *::before,
    *::after {
      box-sizing: border-box;
      -webkit-font-smoothing: antialiased;
      text-rendering: optimizeLegibility;
      -ms-overflow-style: scrollbar;
      -moz-osx-font-smoothing: grayscale;
    }
    
    body,
    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    p,
    ul,
    ol,
    blockquote {
      margin: 0;
      padding: 0;
      font-weight: 400;
    }
    
    img {
      max-width: 100%;
      display: block;
    }
    
    article > * + * {
      margin-top: 1.2em;
    }
  `
}

export default ResetStyles
