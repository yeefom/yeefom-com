import React from 'react'
import Helmet from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'
import PropTypes from 'prop-types'
import SchemaOrg from './SchemaOrg'

const SEO = ({ postMeta = {}, isBlogPost }) => {
  const { site: { siteMetadata } } = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          title
          description
          keywords
          canonicalUrl
          image
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

  const title = postMeta.title || siteMetadata.title
  const description = postMeta.description || siteMetadata.description
  const keywords = postMeta.keywords || siteMetadata.keywords
  const image = postMeta.postImage ? `${siteMetadata.canonicalUrl}${postMeta.postImage}` : siteMetadata.image
  const url = postMeta.slug
    ? (isBlogPost ? `/blog/${postMeta.slug}` : `/${postMeta.slug}`)
    : siteMetadata.canonicalUrl
  const datePublished = isBlogPost ? postMeta.datePublished : false

  return (
    <React.Fragment>
      <Helmet>
        {/* General tags */}
        <meta name="description" content={description}/>
        <meta name="keywords" content={keywords.join(', ')}/>
        <meta name="image" content={image}/>

        {/* OpenGraph tags */}
        <meta property="og:url" content={url}/>
        {isBlogPost ? <meta property="og:type" content="article"/> : null}
        <meta property="og:title" content={title}/>
        <meta property="og:description" content={description}/>
        <meta property="og:image" content={image}/>

        {/* Twitter Card tags */}
        <meta name="twitter:card" content="summary_large_image"/>
        <meta name="twitter:creator" content={siteMetadata.social.twitterHandle}/>
        <meta name="twitter:title" content={title}/>
        <meta name="twitter:description" content={description}/>
        <meta name="twitter:image" content={image}/>
      </Helmet>
      <SchemaOrg
        isBlogPost={isBlogPost}
        url={url}
        title={title}
        image={image}
        description={description}
        datePublished={datePublished}
        canonicalUrl={siteMetadata.canonicalUrl}
        author={siteMetadata.author}
        defaultTitle={siteMetadata.title}
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
