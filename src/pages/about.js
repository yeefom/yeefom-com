import React from 'react'
import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import { css } from '@emotion/core'
import Container from '../components/Container'
import Layout from '../components/Layout'
import SEO from "../components/SEO";
import { bpMaxSM } from "../lib/breakpoints";

export default ({ data, uri }) => {
  const { mdx: { fields, body }, site: { siteMetadata } } = data

  return (
    <Layout pageTitle={fields.title} pageUri={uri}>
      <SEO meta={{
        title: fields.title,
        description: siteMetadata.aboutDescription
      }}/>
      <Container css={css`
        p:last-of-type {
          margin-bottom: 0;
        }
      `}>
        <article>
          <h1
            css={css`
              margin-bottom: 40px;
              ${bpMaxSM} {
                margin-bottom: 10px;
              }
            `}
          >
            {fields.title}
          </h1>
          <br/>
          <MDXRenderer>{body}</MDXRenderer>
        </article>
      </Container>
    </Layout>
  )
}

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        aboutDescription
      }
    }
    mdx(
      fields: { type: { eq: "page" }, slug: { eq: "about" } }
    ) {
      fields {
        title
      }
      body
    }
  }
`
