import React, { Fragment, useState, useEffect } from 'react'
import { Helmet } from 'react-helmet'
import { graphql, useStaticQuery } from 'gatsby'
import { MDXProvider } from '@mdx-js/react'
import { lighten } from 'polished'
import { Global, css } from '@emotion/core'
import { ThemeProvider, themes } from './Theming'
import mdxComponents from './mdxComponents'
import Header from './Header'
import reset from '../lib/reset'
import Footer from '../components/Footer'

const getGlobalStyles = theme => {
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
    .footnotes {
      ol {
        margin-left: 0
      }
      font-size: 0.85rem;
      .footnote-print-only {
        display: revert !important;
      }
    }
    .footnotes.footnote-print-only {
      display: revert !important;
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

export default ({ children, pageTitle }) => {
  const { site } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          author {
            name
          }
        }
      }
    }
  `)

  const initializeTheme = () => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('theme') || 'default'
    } else {
      return 'default'
    }
  }

  const [themeName, setTheme] = useState(initializeTheme)

  useEffect(() => {
    localStorage.setItem('theme', themeName)
  }, [themeName])

  const toggleTheme = name => setTheme(name)

  const theme = {
    ...themes[themeName],
    toggleTheme
  }

  const siteTitle = pageTitle ? `${pageTitle} — ${site.siteMetadata.title}` : site.siteMetadata.title

  return (
    <ThemeProvider theme={theme}>
      <Fragment>
        <Global styles={reset()} />
        <Global styles={getGlobalStyles(theme)} />
        <div
          css={css`
            display: flex;
            flex-direction: column;
            width: 100%;
            min-height: 100vh;
          `}
        >
          <Helmet title={siteTitle}>
            <html lang="en" />
            <noscript>This site runs best with JavaScript enabled.</noscript>
          </Helmet>
          <Header />
          <MDXProvider components={mdxComponents}>
            <Fragment>{children}</Fragment>
          </MDXProvider>
          <Footer/>
        </div>
      </Fragment>
    </ThemeProvider>
  )
}
