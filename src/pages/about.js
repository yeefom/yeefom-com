import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import { css } from '@emotion/core'
import Container from '../components/Container'
import Layout from '../components/Layout'
import SEO from "../components/SEO";

export default () => {
  const { mdx: { fields, body } } = useStaticQuery(graphql`
    query {
      mdx(
        fields: { type: { eq: "page" }, slug: { eq: "about" } }, 
      ) {
        fields {
          title
        }
        body
      }
    }
  `)

  return (
    <Layout pageTitle={fields.title}>
      <SEO postMeta={{ title: fields.title }} />
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
            {fields.title}
          </h1>
          <br />
          <MDXRenderer>{body}</MDXRenderer>
        </article>
      </Container>
    </Layout>
  )
}
