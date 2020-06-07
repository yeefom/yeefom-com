import React, { Fragment } from 'react'
import { Helmet } from 'react-helmet'
import { graphql, useStaticQuery } from 'gatsby'
import { MDXProvider } from '@mdx-js/react'
import { Global } from '@emotion/core'
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
      <Helmet title={siteTitle}>
        <html lang="en" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png?v=ngJEOKnENr" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png?v=ngJEOKnENr" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png?v=ngJEOKnENr" />
        <link rel="manifest" href="/site.webmanifest?v=ngJEOKnENr" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg?v=ngJEOKnENr" color="#2e2f30" />
        <link rel="shortcut icon" href="/favicon.ico?v=ngJEOKnENr" />
        <meta name="msapplication-TileColor" content="#2e2f30" />
        <meta name="theme-color" content="#2e2f30" />
      </Helmet>
      <Global styles={reset()} />
      <Global styles={getGlobalStyles()} />
      <Global styles={littleFoot()} />

      <Header pageName={pageName}/>
      <MDXProvider components={{ code: Code }}>
        <Fragment>{children}</Fragment>
      </MDXProvider>
      <Footer/>
    </Fragment>
  )
}
