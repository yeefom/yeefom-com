import React from 'react'
import { graphql } from 'gatsby'
import { css } from '@emotion/core'
import Layout from '../components/Layout'
import Container from '../components/Container'
import i18n from '../i18n'

export default ({ data: { site } }) => {
  return (
    <Layout site={site} pageTitle='404'>
      <Container css={css`padding-bottom: 0`}>
          <span css={css`margin-bottom: 40px;`}>
            {i18n.notFound}
          </span>
      </Container>
    </Layout>
  );
}

export const pageQuery = graphql`
  query {
    site {
      ...site
    }
  }
`
