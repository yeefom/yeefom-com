import React, { Fragment } from 'react'
import { Helmet } from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'
import SchemaOrg from './SchemaOrg'

const SEO = ({ meta = {}, isBlogPost }) => {
  const { site: { siteMetadata } } = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          title
          canonicalUrl
          author {
            name
          }
          social {
            twitterHandle
          }
        }
      }
    }
  `)

  const title = meta.title === siteMetadata.title ? meta.title : `${meta.title} — ${siteMetadata.title}`
  const image = meta.image ? `${siteMetadata.canonicalUrl}${meta.image}` : undefined
  const pagePath = meta.slug ? (isBlogPost ? `/blog/${meta.slug}` : `/${meta.slug}`) : ''
  const url = `${siteMetadata.canonicalUrl}${pagePath}`

  return (
    <Fragment>
      <Helmet>
        {/* General tags */}
        <meta name="description" content={meta.description}/>
        {meta.keywords && <meta name="keywords" content={meta.keywords}/>}
        {image && <meta name="image" content={image}/>}

        {/* OpenGraph tags */}
        <meta property="og:url" content={url}/>
        {isBlogPost && <meta property="og:type" content="article"/>}
        <meta property="og:title" content={title}/>
        {meta.description && <meta property="og:description" content={meta.description}/>}
        {image && <meta property="og:image" content={image}/>}

        {/* Twitter Card tags */}
        <meta name="twitter:card" content={image ? "summary_large_image" : "summary"}/>
        <meta name="twitter:creator" content={siteMetadata.social.twitterHandle}/>
        <meta name="twitter:title" content={title}/>
        {meta.description && <meta name="twitter:description" content={meta.description}/>}
        {image && <meta name="twitter:image" content={image}/>}
      </Helmet>
      <SchemaOrg
        isBlogPost={isBlogPost}
        url={url}
        title={title}
        image={image}
        description={meta.description}
        datePublished={meta.date}
        canonicalUrl={siteMetadata.canonicalUrl}
        author={siteMetadata.author}
        defaultTitle={title}
      />
    </Fragment>
  )
}

export default SEO
