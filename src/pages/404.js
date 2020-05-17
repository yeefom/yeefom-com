import React from 'react'
import { css } from '@emotion/core'
import Layout from '../components/Layout'
import Container from '../components/Container'
import { useTheme } from '../components/Theming'
import i18n from '../i18n'

export default ({ data: { site } }) => {
  const theme = useTheme()

  return (
    <Layout site={site} pageTitle='404'>
      <Container css={css`padding-bottom: 0`}>
          <span css={css`margin-bottom: 40px;`}>
            {i18n.notFound}
          </span>
          <br />
          <hr css={css`border-top: 3px solid ${theme.colors.headerBg};`}/>
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
