import React from 'react'
import { graphql, Link } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import { css } from '@emotion/core'
import SEO from '../components/SEO'
import Container from '../components/Container'
import Layout from '../components/Layout'
import i18n from "../i18n";

export default function Post({
  data: { mdx },
  pageContext: { next, prev },
}) {
  const { fields, body, frontmatter, excerpt } = mdx
  const image = frontmatter.image ? frontmatter.image.publicURL : null

  return (
    <Layout pageTitle={fields.title}>
      <SEO meta={{
        title: fields.title,
        description: fields.description || excerpt,
        keywords: fields.keywords,
        image
      }} isBlogPost />
      <Container>
        <article className="post-article">
          <h1>
            {fields.title}
          </h1>
          <small className="article-date">
            {fields.date}
          </small>
          <br />
          <MDXRenderer>{body}</MDXRenderer>
        </article>
        <div
          className="pagination-links"
          css={css`
            .navigation-label {
              font-size: 0.9em;            
            }
          `}
        >
          {prev === null ? <div>{''}</div> : (
            <div>
              <div className="navigation-label">{i18n.previousPage}</div>
              <Link
                className="black-link"
                to={prev.pagePath}
                aria-label={i18n.previousArticleAria}
              >
                {prev.title}
              </Link>
            </div>
          )}
          {next && (
            <div css={css`
              text-align: right;
            `}>
              <div className="navigation-label">
                {i18n.nextPage}
              </div>
              <Link
                className="black-link"
                to={next.pagePath}
                aria-label={i18n.nextArticleAria}
              >
                {next.title}
              </Link>
            </div>
          )}
        </div>
      </Container>
    </Layout>
  )
}

export const pageQuery = graphql`
  query($id: String!) {
    mdx(id: { eq: $id }) {
      fields {
        title
        date(formatString: "MMMM DD, YYYY")
        slug
        description
        keywords
      }
      frontmatter {
        image {
          publicURL
        }
      }
      body
      excerpt
    }
  }
`
