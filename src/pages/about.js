import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import { css } from '@emotion/core'
import Container from '../components/Container'
import Layout from '../components/Layout'

export default () => {
  const { site, mdx } = useStaticQuery(graphql`
    query {
      site {
        ...site
      }
      mdx(
        fields: { type: { eq: "page" } }, 
        frontmatter: { slug: { eq: "about" } }
        ) {
          frontmatter {
            title
            slug
          }
          body
      }
    }
  `)

  const title = mdx.frontmatter.title

  return (
    <Layout site={site} frontmatter={mdx.frontmatter} pageTitle={title}>
      <Container css={css`
        p:last-of-type {
          margin-bottom: 0;
        }
      `}>
        <article>
          <h1
            css={css`
              margin-bottom: 40px;
            `}
          >
            {title}
          </h1>
          <br />
          <MDXRenderer>{mdx.body}</MDXRenderer>
        </article>
      </Container>
    </Layout>
  )
}
