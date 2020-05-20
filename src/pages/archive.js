import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { css } from '@emotion/core'
import Container from '../components/Container'
import SEO from '../components/SEO'
import Layout from '../components/Layout'
import Link from '../components/Link'
import i18n from '../i18n'

export default () => {
  const { site, allMdx } = useStaticQuery(graphql`
    query {
      site {
        ...site
      }
      allMdx(
        sort: { fields: [frontmatter___date], order: DESC }
        filter: { fields: { type: { eq: "blog" } } }
      ) {
        edges {
          node {
            id
            fields {
              pagePath
            }
            frontmatter {
              title
              date(formatString: "MMMM DD, YYYY")
            }
          }
        }
      }
    }
  `)

  return (
    <Layout site={site} pageTitle={i18n.archive}>
      <SEO />
      <Container>
        <h1 css={css`margin-bottom: 40px;`}>
          {i18n.archive}
        </h1>
        <br />
        {allMdx.edges.map(({ node }) => {
          const { frontmatter, fields, id } = node

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
              <small>{frontmatter.date}</small>
              <h2
                css={css`
                  font-size: 1em;
                  margin-top: 8px;
                  margin-bottom: 10px;
                `}
              >
                <Link
                  aria-label={`View ${frontmatter.title} article`}
                  to={fields.pagePath}>
                  {frontmatter.title}
                </Link>
              </h2>
            </div>
          );
        })}
      </Container>
    </Layout>
  )
}
