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
  data: { site, mdx },
  pageContext: { next, prev },
}) {
  const date = mdx.frontmatter.date
  const title = mdx.frontmatter.title

  return (
    <Layout site={site} frontmatter={mdx.frontmatter} pageTitle={title}>
      <SEO frontmatter={mdx.frontmatter} isBlogPost />
      <Container css={css`padding-bottom: 0`}>
        <article>
          <h1 css={css`margin-bottom: 5px;`}>
            {title}
          </h1>
          <small css={css`display: inline-block; margin-bottom: 60px;`}>{date}</small>
          <br />
          <MDXRenderer>{mdx.body}</MDXRenderer>
        </article>
        <div css={css({ marginTop: '80px', marginBottom: '80px', display: 'flex', justifyContent: 'space-between'})}>
          {prev === null ? <div>{''}</div> : (
            <Link to={`/${prev.fields.slug}`} aria-label={i18n.previousArticleAria}>
              {`${i18n.previous} ${prev.fields.title}`}
            </Link>
          )}
          {next && (
            <Link to={`/${next.fields.slug}`} aria-label={i18n.nextArticleAria}>
              {`${next.fields.title} ${i18n.next}`}
            </Link>
          )}
        </div>
      </Container>
    </Layout>
  )
}

export const pageQuery = graphql`
  query($id: String!) {
    site {
      ...site
    }
    mdx(fields: { id: { eq: $id } }) {
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        author
        slug
        keywords
      }
      body
    }
  }
`
