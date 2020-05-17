import React from 'react'
import { graphql } from 'gatsby'
import { css } from '@emotion/core'
import Layout from '../components/Layout'
import Link from '../components/Link'
import { useTheme } from '../components/Theming'
import Container from '../components/Container'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import i18n from '../i18n'

export default function Index({ data: { site, allMdx }, pageContext: { pagination } }) {
  const theme = useTheme()
  const { page, nextPagePath, previousPagePath } = pagination
  const posts = page
    .map(id => allMdx.edges.find(edge => edge.node.id === id))
    .filter(post => post !== undefined)

  return (
    <Layout site={site}>
      <Container
        css={css`
          padding-bottom: 0;
        `}
      >
        {posts.map(({ node: post }) => (
          <article
            key={post.id}
            css={css`
              :not(:first-of-type) {
                margin-top: 140px;
              }
            `}
          >
            <h1
              css={css({
                marginBottom: '5px',
                ':hover': {
                  color: theme.colors.primary,
                },
              })}
            >
              <Link
                to={'/blog/' + post.frontmatter.slug}
                aria-label={`View ${post.frontmatter.title}`}
              >
                {post.frontmatter.title}
              </Link>
            </h1>
            <small css={css`display: inline-block; margin-bottom: 60px;`}>{post.frontmatter.date}</small>
            <br />
            <MDXRenderer>{post.body}</MDXRenderer>
          </article>
        ))}
        <div css={css({ marginTop: '80px', marginBottom: '80px', display: 'flex', justifyContent: 'space-between'})}>
          {previousPagePath === null ? <div>{''}</div> : (
            <Link to={previousPagePath} aria-label={i18n.previousPageAria}>
              {i18n.previousPage}
            </Link>
          )}
          {nextPagePath && (
            <Link to={nextPagePath} aria-label={i18n.nextPageAria}>
              {i18n.nextPage}
            </Link>
          )}
        </div>
      </Container>
    </Layout>
  )
}

export const pageQuery = graphql`
  query {
    site {
      ...site
      siteMetadata {
        title
      }
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
            type
          }
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
            description
            slug
            keywords
          }
          body
        }
      }
    }
  }
`
