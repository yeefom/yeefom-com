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
  const { frontmatter, body } = mdx

  return (
    <Layout frontmatter={frontmatter} pageTitle={frontmatter.title}>
      <SEO frontmatter={frontmatter} isBlogPost />
      <Container>
        <article>
          <h1 css={css`margin-bottom: 5px;`}>
            {frontmatter.title}
          </h1>
          <small css={css`display: inline-block; margin-bottom: 60px;`}>{frontmatter.date}</small>
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
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        author
        keywords
      }
      body
    }
  }
`
