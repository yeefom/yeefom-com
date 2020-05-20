import React from 'react'
import { css } from '@emotion/core'
import Layout from '../components/Layout'
import Container from '../components/Container'
import i18n from '../i18n'

export default () => (
  <Layout pageTitle='404'>
    <Container>
        <span css={css`margin-bottom: 40px;`}>
          {i18n.notFound}
        </span>
    </Container>
  </Layout>
)
