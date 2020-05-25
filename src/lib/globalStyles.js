import { css } from '@emotion/core'
import { lighten } from 'polished'
import { bpMaxSM } from './breakpoints'

export const getGlobalStyles = theme => {
  return css`
    body {
      background: ${theme.colors.bodyBg};
      color: ${theme.colors.text};
    }
    a {
      color: ${theme.colors.link};
      &:hover,
      &:focus {
        color: ${theme.colors.link};
      }
    }
    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      color: ${theme.colors.text};
      a {
        text-decoration: none;
        color: ${theme.colors.text};
        &:hover,
        &:focus {
          color: ${theme.colors.text};
        }
      }
    }
    ${bpMaxSM} {
      p,
      em,
      li,
      strong {
        font-size: 90%;
      }
      h1 {
        margin-top: 1rem;
        margin-bottom: 1rem;
        font-size: 25px;
      }
    }
    hr {
      margin: 50px 0;
      border: none;
      border-top: 1px solid ${theme.colors.blockquote};
      background: none;
    }
    blockquote {
      border-color: ${theme.colors.blockquote};
      color: ${theme.colors.blockquote};
    }
    em {
      font-style: italic;
      font-weight: 400;
    }
    strong {
      em {
        font-style: normal;
        font-weight: 600;
      }
    }
    input {
      border-radius: 4px;
      border: 1px solid ${theme.colors.gray};
      padding: 5px 10px;
      box-shadow: 0 0 3px rgba(0, 0, 0, 0.1);
      margin-top: 5px;
      ::placeholder {
        opacity: 0.4;
      }
    }
    .gatsby-resp-image-image {
      background: none !important;
      box-shadow: 0;
    }
    button {
      border-radius: 4px;
      background-color: ${theme.colors.primary};
      border: none;
      color: ${theme.colors.white};
      padding: 5px 10px;
      cursor: pointer;
      border: 1px solid ${theme.colors.primary};
      transition: all 150ms;
      :hover {
        background: ${lighten(0.05, theme.colors.primary)};
        border: 1px solid ${lighten(0.05, theme.colors.primary)};
      }
    }
    pre {
      background-color: #061526 !important;
      border-radius: 4px;
      font-size: 16px;
      padding: 10px;
      overflow-x: auto;
      /* Track */
      ::-webkit-scrollbar {
        width: 100%;
        height: 5px;
        border-radius: 0 0 5px 5px;
      }
      ::-webkit-scrollbar-track {
        background: #061526;
        border-radius: 0 0 4px 4px;
        border: 1px solid rgba(0, 0, 0, 0.2);
      }
      /* Handle */
      ::-webkit-scrollbar-thumb {
        background: #888;
        border-radius: 5px;
      }
    }
    .nav-link {
      margin-top: 77px;
      display: flex;
      justify-content: space-between;
      a {
        color: ${theme.colors.text};
        &:focus {
          color: ${theme.colors.text};
          outline: none;
        }
        &:hover {
          color: ${theme.colors.text};
        }
        ${bpMaxSM} {
          font-size: 90%;
        }
      }
    }
    .index-article, .post-article {
      h1 {
        margin-bottom: 5px;
        a {
          &:focus {
            outline: none;
          }
        }
      }
    }
    small.article-date {
      display: inline-block; 
      margin-bottom: 60px;
      ${bpMaxSM} {
        margin-bottom: 40px;
      }
    }
    .footnotes {
      ol {
        margin-left: 0
      }
      font-size: 0.85rem;
      .footnote-print-only {
        display: inherit !important;
      }
    }
    .footnotes.footnote-print-only {
      display: inherit !important;
    }
    .footnotes .footnote-print-only li {
      display: list-item !important;
    }
    .littlefoot-footnote.is-scrollable::after {
      background-image: none;
    }
    .littlefoot-footnote.is-scrollable .littlefoot-footnote__wrapper::before {
      background-image: none;
    }
    .littlefoot-footnote.is-scrollable .littlefoot-footnote__wrapper::after {
      background-image: none;
    }
    .littlefoot-footnote__button {
      color: ${theme.colors.footnoteButtonText};
      background-color: ${theme.colors.footnoteButtonBackground};
    }
    .littlefoot-footnote__host {
      .littlefoot-footnote__content, .littlefoot-footnote__tooltip, .littlefoot-footnote__wrapper {
        background: ${theme.colors.headerBg};
      }
      button {
        font-size: 0.8rem;
        font-weight: 500;
        padding: 0 6px;
        height: 1rem;
      }
      button:hover {
        border: none;
      }
      .littlefoot-footnote__content {
        font-size: 0.8rem;
      }
    }
  `
}
