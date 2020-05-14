import React from 'react'
import { css } from '@emotion/core'
import { bpMaxSM } from '../lib/breakpoints'
import {Twitter, GitHub, Feed, Email} from './Social'
import Container from './Container'

const Footer = ({ author, copyRightYears }) => (
  <footer>
    <Container
      css={css`
        padding-top: 0;
        ${bpMaxSM} {
          padding-top: 0;
        }
      `}
    >
      <div
        css={css`
          display: flex;
          align-items: center;
          justify-content: space-between;
        `}
      >
        <div
          css={css`
            font-size: 93%;
            opacity: 0.7;
          `}
        >
          {author && `${author} \u00A9 ${copyRightYears}`}
        </div>
        <div>
          <Twitter />
          <GitHub />
          <Email />
          <Feed />
        </div>
      </div>
    </Container>
  </footer>
)

export default Footer
