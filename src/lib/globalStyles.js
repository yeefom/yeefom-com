import { css } from '@emotion/core'
import { bpMaxSM } from './breakpoints'
import { light, dark } from './colors'

export default () => {
  return css`
    html {
      font: 112.5%/1.55 system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
    }
    body {
      word-wrap: break-word;
      background: ${light.bodyBg};
      color: ${light.text};
    }
    a {
      color: ${light.link};
      &:active,
      &:visited,
      &:hover,
      &:focus {
        color: ${light.link};
        outline: none;
      }
    }
    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      color: ${light.text};
      font-weight: 600;
      line-height: 1.3;
      a {
        text-decoration: none;
        color: ${light.text};
        &:active,
        &:visited,
        &:hover,
        &:focus {
          color: ${light.text};
        }
      }
    }
    h1 {
      font-size: 1.6rem;
    }
    h2 {
      font-size: 1.35rem;
    },
    h3 {
      font-size: 1.15rem;
    }
    ul, ol {
      list-style-position: outside;
      li {
        margin-top: 1em;
      }
    }
    ul {
      margin-left: 1.8rem;
    }
    ol {
      margin-left: 2rem;
    }
    small {
      font-size: 80%
    }
    hr {
      margin: 40px 0;
      border: none;
      border-top: 1px solid ${light.blockquote};
      background: none;
    }
    blockquote {
      padding-left: 1em;
      font-style: italic;
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
    pre {
      background-color: #061526;
      border-radius: 4px;
      padding: 0.8rem;
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
      padding: 1.2rem 0;
      background: ${light.headerBg};
    }
    .dark-link {
      a {
        color: ${light.text};
        &:active,
        &:visited,
        &:hover,
        &:focus {
          color: ${light.text};
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
    .article-date {
      display: inline-block; 
      margin: 0 0 1.5rem;
    }
    .footer-container {
      border-top: 3px solid ${light.divider};
      padding: 50px 0;
      margin-top: 40px;
    }
    .gatsby-resp-image-image {
      background: none !important;
      box-shadow: none;
    }
    .navigation-links {
      margin-top: 4.3rem;
      display: flex;
      justify-content: space-between;
    }
    .footnotes {
      ol {
        margin-left: 1.5rem;
      }
      font-size: 0.85rem;
      hr {
        margin-bottom: 25px;
      }
    }
    .footnote-backref {
      visibility: hidden;
      margin-left: 3px;
      &::before {
        visibility: visible;
        content: "↩︎";        
      }
    }
    ${bpMaxSM} {
      body {
        font-size: 90%;
      }
      h1 {
        font-size: 1.4rem;
      }
      h2 {
        font-size: 1.15rem;
      },
      h3 {
        font-size: 1rem;
      }
      hr {
        margin: 30px 0;
      }
      small.article-date {
        margin-bottom: 1rem;
      }
    }
    @media (prefers-color-scheme: dark) {
      body {
        background: ${dark.bodyBg};
        color: ${dark.text};
      }
      a {
        color: ${dark.text};
        &:active,
        &:visited,
        &:hover,
        &:focus {
          color: ${dark.text};
        }
      }
      h1, 
      h2, 
      h3, 
      h4, 
      h5, 
      h6 {
        color: ${dark.text};
        a {
          color: ${dark.text};
          &:active,
          &:visited,
          &:hover,
          &:focus {
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
      img {
        filter: brightness(90%);
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
      .dark-link {
        a {
          color: ${dark.text};
          &:active,
          &:visited,
          &:hover,
          &:focus {
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
    }
  `
}
