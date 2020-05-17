import React from 'react'
import { css } from '@emotion/core'
import { bpMaxSM } from '../lib/breakpoints'
import {Twitter, GitHub, Feed, Email} from './Social'
import Container from './Container'

const Footer = ({ author, copyRightYears }) => (
  <footer>
    <Container
      noDivider
      css={css`
        padding-top: 0;
        ${bpMaxSM} {
          padding-top: 0;
        }
      `}
    >
      <div
      >
        <div css={css`opacity: 0.7`}>
          <Twitter />
          <GitHub />
          <Email />
          <Feed />
        </div>
        <div
          css={css`
            margin-top: 16px;
            font-size: 93%;
            opacity: 0.7;
          `}
        >
          {author && `${author} \u00A9 ${copyRightYears}`}
        </div>
      </div>
    </Container>
  </footer>
)

export default Footer
