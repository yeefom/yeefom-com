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
  const { nextPagePath, previousPagePath } = pagination

  return (
    <Layout site={site}>
      <Container>
        {allMdx.edges.map(({ node }) => {
          const { id, body, frontmatter, fields } = node;

          return (
            <article
              key={id}
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
                  to={fields.pagePath}
                  aria-label={`View ${frontmatter.title}`}
                >
                  {frontmatter.title}
                </Link>
              </h1>
              <small css={css`display: inline-block; margin-bottom: 60px;`}>{frontmatter.date}</small>
              <br/>
              <MDXRenderer>{body}</MDXRenderer>
            </article>
          );
        })}
        <div css={css({ marginTop: '77px', display: 'flex', justifyContent: 'space-between'})}>
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
  query($pagePosts: [String!]!) {
    site {
      ...site
    }
    allMdx(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { id: { in: $pagePosts } }
    ) {
      edges {
        node {
          id
          fields {
            pagePath
          }
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
          }
          body
        }
      }
    }
  }
`
