import React from 'react'
import { graphql, Link } from 'gatsby'
import { css } from '@emotion/core'
import Layout from '../components/Layout'
import Container from '../components/Container'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import i18n from '../i18n'
import SEO from "../components/SEO";

export default function Index({ data: { allMdx, site: { siteMetadata } }, pageContext: { pagination } }) {
  const { nextPagePath, previousPagePath, pageIndex } = pagination

  return (
    <Layout pageIndex={pageIndex}>
      <SEO meta={{
        title: siteMetadata.title,
        description: siteMetadata.description,
        keywords: siteMetadata.keywords
      }}/>
      <Container>
        {allMdx.edges.map(({ node }) => {
          const { id, body, fields } = node;

          return (
            <article
              className="index-article"
              key={id}
              css={css`
                :not(:first-of-type) {
                  margin-top: 140px;
                }
              `}
            >
              <h1>
                <Link
                  to={fields.pagePath}
                  aria-label={`${i18n.view} ${fields.title}`}
                >
                  {fields.title}
                </Link>
              </h1>
              <small className="article-date">
                {fields.date}
              </small>
              <br/>
              <MDXRenderer>{body}</MDXRenderer>
            </article>
          );
        })}
        <div className="navigation-links dark-link">
          {previousPagePath === null ? <div>{''}</div> : (
            <Link
              to={previousPagePath}
              aria-label={i18n.previousPageAria}
            >
              {i18n.previousPage}
            </Link>
          )}
          {nextPagePath && (
            <Link
              to={nextPagePath}
              aria-label={i18n.nextPageAria}
            >
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
      siteMetadata {
        title
        description
        keywords
      }
    }
    allMdx(
      sort: { fields: [fields___date], order: DESC }
      filter: { id: { in: $pagePosts } }
    ) {
      edges {
        node {
          id
          fields {
            pagePath
            title
            date(formatString: "MMMM DD, YYYY")
          }
          body
        }
      }
    }
  }
`
