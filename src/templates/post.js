import React from 'react'
import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import SEO from '../components/SEO'
import Container from '../components/Container'
import Layout from '../components/Layout'
import Link from "../components/Link";
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
        <div className="pagination-link">
          {prev === null ? <div>{''}</div> : (
            <Link to={prev.pagePath} aria-label={i18n.previousArticleAria}>
              {`${i18n.previous} ${prev.title}`}
            </Link>
          )}
          {next && (
            <Link to={next.pagePath} aria-label={i18n.nextArticleAria}>
              {`${next.title} ${i18n.next}`}
            </Link>
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
