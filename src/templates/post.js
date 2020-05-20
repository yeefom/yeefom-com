import React from 'react'
import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import { css } from '@emotion/core'
import SEO from '../components/SEO'
import Container from '../components/Container'
import Layout from '../components/Layout'
import Link from "../components/Link";
import i18n from "../i18n";

export default function Post({
  data: { mdx },
  pageContext: { next, prev },
}) {
  const { fields, body } = mdx

  return (
    <Layout pageTitle={fields.title}>
      <SEO postMeta={fields} isBlogPost />
      <Container>
        <article>
          <h1 css={css`margin-bottom: 5px;`}>
            {fields.title}
          </h1>
          <small css={css`display: inline-block; margin-bottom: 60px;`}>{fields.date}</small>
          <br />
          <MDXRenderer>{body}</MDXRenderer>
        </article>
        <div css={css({ marginTop: '77px', display: 'flex', justifyContent: 'space-between'})}>
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
      body
    }
  }
`
