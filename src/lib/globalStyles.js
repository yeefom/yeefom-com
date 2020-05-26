import { css } from '@emotion/core'
import { bpMaxSM } from './breakpoints'
import { light, dark } from './colors'

export const getGlobalStyles = () => {
  return css`
    body {
      background: ${light.bodyBg};
      color: ${light.text};
    }
    a {
      color: ${light.link};
      &:hover,
      &:focus {
        color: ${light.link};
      }
    }
    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      color: ${light.text};
      a {
        text-decoration: none;
        color: ${light.text};
        &:hover,
        &:focus {
          color: ${light.text};
        }
      }
    }
    ${bpMaxSM} {
      p,
      em,
      li,
      strong {
        font-size: 90%;
        margin-bottom: 1rem;
      }
      h1 {
        margin-top: 1rem;
        margin-bottom: 1rem;
        font-size: 25px;
      }
      h2 {
        font-size: 20px;
      }
      h3 {
        font-size: 18px;
      }
    }
    hr {
      margin: 40px 0;
      border: none;
      border-top: 1px solid ${light.blockquote};
      background: none;
    }
    blockquote {
      border-left: 5px solid ${light.blockquote};
      color: ${light.blockquote};
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
    .gatsby-resp-image-image {
      background: none !important;
      box-shadow: 0;
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
    header {
      width: 100%;
      padding: 20px 0;
      background: ${light.headerBg};
      a {
        color: ${light.text};
        border-color: ${light.text};
        &:focus {
          color: ${light.text};
          outline: none;
        }
        &:hover {
          color: ${light.text};
        }
      }
    }
    .pagination-link {
      margin-top: 77px;
      display: flex;
      justify-content: space-between;
      a {
        display:block;
        color: ${light.text};
        &:focus {
          color: ${light.text};
          outline: none;
        }
        &:hover {
          color: ${light.text};
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
    footer {
      .footer-container {
        border-top: 3px solid ${light.divider};
        padding: 50px 0;
        margin-top: 40px;
      }
      .social-container {
        opacity: 0.7;
        a {
          color: ${light.text};
          &:hover {
            color: ${light.text};
          }
          :not(:first-of-type) {
            margin-left: 10px;
          }
        }
      }
    }
    .footnotes {
      ol {
        margin-left: 1.5rem;
      }
      font-size: 0.85rem;
      .footnote-print-only {
        display: inherit !important;
      }
      hr {
        margin-bottom: 25px;
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
      color: ${light.footnoteButtonText};
      background-color: ${light.footnoteButtonBackground};
    }
    .littlefoot-footnote__host {
      .littlefoot-footnote__content, .littlefoot-footnote__tooltip, .littlefoot-footnote__wrapper {
        background: ${light.headerBg};
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
    @media (prefers-color-scheme: dark) {
      body {
        background: ${dark.bodyBg};
        color: ${dark.text};
      }
      a {
        color: ${dark.link};
        &:hover, &:focus {
          color: ${dark.link};
        }
      }
      h1, h2, h3, h4, h5, h6 {
        color: ${dark.text};
        a {
          color: ${dark.text};
          &:hover, &:focus {
            color: ${dark.text};
          }
        }
      }
      hr {
        border-color: ${dark.blockquote}
      }
      blockquote {
        border-color: ${dark.blockquote};
        color: ${dark.blockquote};
      }
      input {
        border-color: ${dark.blockquote};
      }
      header {
        background: ${dark.headerBg};
        a {
          color: ${dark.text};
          border-color: ${dark.text};
          &:focus {
            color: ${dark.text};
          }
          &:hover {
            color: ${dark.text};
          }
        }
      }
      .pagination-link {
        a {
          color: ${dark.text};
          &:focus {
            color: ${dark.text};
          }
          &:hover {
            color: ${dark.text};
          }
        }
      }
      footer {
        .footer-container {
          border-color: ${dark.divider};
        }
        .social-container {
          a {
            color: ${dark.text};
            &:hover {
              color: ${dark.text};
            }
          }
        }
      }
      .littlefoot-footnote__button {
        color: ${dark.footnoteButtonText};
        background-color: ${dark.footnoteButtonBackground};
      }
      .littlefoot-footnote__host {
        .littlefoot-footnote__content, .littlefoot-footnote__tooltip, .littlefoot-footnote__wrapper {
          background: ${dark.headerBg};
        }
      }
    }
  `
}
