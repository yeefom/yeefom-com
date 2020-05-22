import React from 'react'
import Helmet from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'
import PropTypes from 'prop-types'
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
    <React.Fragment>
      <Helmet>
        {/* General tags */}
        <meta name="description" content={meta.description}/>
        <meta name="keywords" content={meta.keywords}/>
        <meta name="image" content={image}/>

        {/* OpenGraph tags */}
        <meta property="og:url" content={url}/>
        {isBlogPost ? <meta property="og:type" content="article"/> : null}
        <meta property="og:title" content={title}/>
        <meta property="og:description" content={meta.description}/>
        <meta property="og:image" content={image}/>

        {/* Twitter Card tags */}
        <meta name="twitter:card" content="summary_large_image"/>
        <meta name="twitter:creator" content={siteMetadata.social.twitterHandle}/>
        <meta name="twitter:title" content={title}/>
        <meta name="twitter:description" content={meta.description}/>
        <meta name="twitter:image" content={image}/>
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
    </React.Fragment>
  )
}

SEO.propTypes = {
  isBlogPost: PropTypes.bool,
  postImage: PropTypes.string,
}

SEO.defaultProps = {
  isBlogPost: false,
  postImage: null,
}

export default SEO
