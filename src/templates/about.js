import React from 'react'
import {graphql} from 'gatsby'
import {MDXRenderer} from 'gatsby-plugin-mdx'
import {css} from '@emotion/core'
import Container from '../components/Container'
import Layout from '../components/Layout'
import { useTheme } from '../components/Theming'

export default ({ data: { site, mdx } }) => {
  const theme = useTheme()
  const title = mdx.frontmatter.title

  return (
    <Layout site={site} frontmatter={mdx.frontmatter} pageTitle={title}>
      <Container css={css`padding-bottom: 0`}>
        <article>
          <h1 css={css`margin-bottom: 40px;`}>
            {title}
          </h1>
          <br />
          <MDXRenderer>{mdx.body}</MDXRenderer>
          <hr css={css`border-top: 3px solid ${theme.colors.headerBg}; margin-top: 80px`}/>
        </article>
      </Container>
    </Layout>
  )
}

export const pageQuery = graphql`
  query {
    site {
      ...site
    }
    mdx(fields: { type: {eq: "page"}, slug: { eq: "about" } }) {
      frontmatter {
        title
        slug
      }
      body
    }
  }
`
