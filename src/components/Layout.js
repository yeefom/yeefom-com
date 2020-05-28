import React, { Fragment } from 'react'
import { Helmet } from 'react-helmet'
import { graphql, useStaticQuery } from 'gatsby'
import { MDXProvider } from '@mdx-js/react'
import { Global, css } from '@emotion/core'
import Header from './Header'
import Footer from './Footer'
import Code from './Code'
import i18n from '../i18n'
import reset from '../lib/reset'
import getGlobalStyles from '../lib/globalStyles'
import littleFoot from '../lib/littleFoot'

export default ({ children, pageTitle, pageName, pageIndex }) => {
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

  const siteTitle = pageIndex
    ? pageIndex === 1 ? site.siteMetadata.title : `${site.siteMetadata.title} — ${i18n.page} ${pageIndex}`
    : pageTitle ? `${pageTitle} — ${site.siteMetadata.title}` : site.siteMetadata.title

  return (
    <Fragment>
      <Global styles={reset()} />
      <Global styles={getGlobalStyles()} />
      <Global styles={littleFoot()} />
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
