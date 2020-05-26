import React from 'react'
import { graphql } from 'gatsby'
import { css } from '@emotion/core'
import Container from '../components/Container'
import SEO from '../components/SEO'
import Layout from '../components/Layout'
import Link from '../components/Link'
import i18n from '../i18n'
import { bpMaxSM } from "../lib/breakpoints";

export default ({ data }) => {
  const { allMdx, site: { siteMetadata } } = data

  return (
    <Layout pageTitle={i18n.archive} pageName="archive">
      <SEO meta={{
        title: i18n.archive,
        description: siteMetadata.archiveDescription
      }}/>
      <Container>
        <h1 css={css`
          margin-bottom: 40px;
          ${bpMaxSM} {
            margin-bottom: 10px;
          }
        `}>
          {i18n.archive}
        </h1>
        <br/>
        {allMdx.edges.map(({ node }) => {
          const { fields, id } = node

          return (
            <div
              key={id}
              css={css`
                :not(:first-of-type) {
                  margin-top: 20px;
                }
                display: flex;
                flex-direction: column;
              `}
            >
              <small>{fields.date}</small>
              <h2
                css={css`
                  font-size: 1rem;
                  margin-top: 8px;
                  margin-bottom: 10px;
                `}
              >
                <Link
                  aria-label={`View ${fields.title} article`}
                  to={fields.pagePath}>
                  {fields.title}
                </Link>
              </h2>
            </div>
          )
        })}
      </Container>
    </Layout>
  )
}

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        archiveDescription
      }
    }
    allMdx(
      sort: { fields: [fields___date], order: DESC }
      filter: { fields: { type: { eq: "blog" } } }
    ) {
      edges {
        node {
          id
          fields {
            pagePath
            title
            date(formatString: "MMMM DD, YYYY")
          }
        }
      }
    }
  }
`
