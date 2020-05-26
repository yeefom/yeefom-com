import React, { Fragment } from 'react'
import { Helmet } from 'react-helmet'
import { graphql, useStaticQuery } from 'gatsby'
import { MDXProvider } from '@mdx-js/react'
import { Global, css } from '@emotion/core'
import Header from './Header'
import reset from '../lib/reset'
import Footer from '../components/Footer'
import Code from './Code'
import { getGlobalStyles } from '../lib/globalStyles'

export default ({ children, pageTitle, pageName }) => {
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

  const siteTitle = pageTitle ? `${pageTitle} — ${site.siteMetadata.title}` : site.siteMetadata.title

  return (
    <Fragment>
      <Global styles={reset()} />
      <Global styles={getGlobalStyles()} />
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
        <Header pageName={pageName}/>
        <MDXProvider components={{ code: Code }}>
          <Fragment>{children}</Fragment>
        </MDXProvider>
        <Footer/>
      </div>
    </Fragment>
  )
}
