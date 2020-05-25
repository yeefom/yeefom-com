import React from 'react'
import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import { css } from '@emotion/core'
import SEO from '../components/SEO'
import Container from '../components/Container'
import Layout from '../components/Layout'
import Link from "../components/Link";
import i18n from "../i18n";
import { bpMaxSM } from "../lib/breakpoints";
import { useTheme } from "../components/Theming";

export default function Post({
  data: { mdx },
  pageContext: { next, prev },
}) {
  const { fields, body, frontmatter, excerpt } = mdx
  const image = frontmatter.image ? frontmatter.image.publicURL : null
  const theme = useTheme()

  return (
    <Layout pageTitle={fields.title}>
      <SEO meta={{
        title: fields.title,
        description: fields.description || excerpt,
        keywords: fields.keywords,
        image
      }} isBlogPost />
      <Container>
        <article>
          <h1 css={css`margin-bottom: 5px;`}>
            {fields.title}
          </h1>
          <small css={css`
            display: inline-block; 
            margin-bottom: 60px;
            ${bpMaxSM} {
              margin-bottom: 40px;
            }
          `}>
            {fields.date}
          </small>
          <br />
          <MDXRenderer>{body}</MDXRenderer>
        </article>
        <div css={css`
          margin-top: 77px;
          display: flex;
          justify-content: space-between;
          a {
            color: ${theme.colors.text};
            &:focus {
              color: ${theme.colors.text};
              outline: none;
            }
            &:hover {
              color: ${theme.colors.text};
            }
            ${bpMaxSM} {
              font-size: 90%;
            }
          }
        `}>
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
