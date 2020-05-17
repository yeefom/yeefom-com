import React from 'react'
import { graphql } from 'gatsby'
import { css } from '@emotion/core'
import Container from '../components/Container'
import SEO from '../components/SEO'
import Layout from '../components/Layout'
import Link from '../components/Link'
import { bpMaxSM } from '../lib/breakpoints'
import i18n from '../i18n'

export default ({
  data: { site, allMdx }
}) => {
  const posts = allMdx.edges
    .filter(post => post !== undefined)

  return (
    <Layout site={site} pageTitle={i18n.archive}>
      <SEO />
      <Container>
        <h1 css={css`margin-bottom: 40px;`}>
          {i18n.archive}
        </h1>
        <br />
        {posts.map(({ node: post }) => (
          <div
            key={post.id}
            css={css`
              :not(:first-of-type) {
                margin-top: 20px;
              }
              display: flex;
              flex-direction: column;
            `}
          >
            <small>{post.frontmatter.date}</small>
            <h2
              css={css`
                font-size: 1em;
                margin-top: 8px;
                margin-bottom: 10px;
              `}
            >
              <Link
                aria-label={`View ${post.frontmatter.title} article`}
                to={`/${post.fields.slug}`}>
                {post.frontmatter.title}
              </Link>
            </h2>
          </div>
        ))}
      </Container>
    </Layout>
  )
}

export const pageQuery = graphql`
  query {
    site {
      ...site
    }
    allMdx(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { fields: { type: { eq: "blog" } } }
    ) {
      edges {
        node {
          id
          fields {
            title
            slug
            date
          }
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
            slug
          }
        }
      }
    }
  }
`
