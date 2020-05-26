import { css } from '@emotion/core'
import { light } from './colors'

const ResetStyles = () => {
  return css`
    form {
      margin: 0;
    }
    ul, ol {
      list-style-position: outside;
      margin-left: 1.7rem;
    }
    *,
    *:before,
    *:after {
      box-sizing: inherit;
    }
    html,
    body {
      font-style: normal;
      padding: 0;
      margin: 0;
    }
    html {
      text-rendering: optimizeLegibility;
      overflow-x: hidden;
      overflow-y: auto !important;
      box-sizing: border-box;
      -ms-overflow-style: scrollbar;
      -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    }
    a {
      transition: 100ms;
    }
  
    a:not([href]):not([tabindex]) {
      color: inherit;
      &:hover,
      &:focus {
        color: inherit;
      }
      &:focus {
        outline: 0;
      }
    }
  
    blockquote {
      padding-left: 1rem !important;
      margin-left: 0 !important;
      margin-right: 0 !important;
      font-style: italic;
      font-size: 1rem;
      p {
        line-height: 1.3 !important;
      }
    }
    [tabindex='-1']:focus {
      outline: none !important;
    }
    pre {
      margin-top: 0;
      margin-bottom: 1rem;
      overflow: auto;
    }
    figure {
      margin: 0 0 1rem 0;
    }
    img {
      vertical-align: middle;
    }
    [role='button'] {
      cursor: pointer;
    }
    a,
    area,
    button,
    [role='button'],
    input,
    label,
    select,
    summary,
    textarea {
      touch-action: manipulation;
    }
    table {
      border-collapse: collapse;
      background-color: ${light.bodyBg};
    }
    caption {
      padding-top: 1.5rem;
      padding-bottom: 1.5rem;
      color: ${light.bodyBg};
      text-align: center;
      caption-side: bottom;
    }
    th {
      text-align: left;
    }
    label {
      display: inline-block;
      margin-bottom: 0.5rem;
    }
    button:focus {
      outline: none;
    }
    input,
    button,
    select,
    textarea {
      line-height: inherit;
    }
    input[type='date'],
    input[type='time'],
    input[type='datetime-local'],
    input[type='month'] {
      -webkit-appearance: listbox;
    }
    textarea {
      resize: vertical;
    }
    fieldset {
      min-width: 0;
      padding: 0;
      margin: 0;
      border: 0;
    }
    legend {
      display: block;
      width: 100%;
      padding: 0;
      margin-bottom: 0.5rem;
      font-size: 1.5rem;
      line-height: inherit;
    }
    input[type='search'] {
      -webkit-appearance: none;
    }
    output {
      display: inline-block;
    }
    svg:not(:root) {
      overflow: hidden;
      vertical-align: middle;
    }
    [hidden] {
      display: none !important;
    }
  `
}

export default ResetStyles
