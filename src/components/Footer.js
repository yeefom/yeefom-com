import React from 'react'
import { css } from '@emotion/core'
import {Twitter, GitHub, Feed, Email} from './Social'
import Container from './Container'
import { useTheme } from './Theming'

const Footer = ({ author, copyRightYears }) => {
  const theme = useTheme()

  return (
    <footer>
      <Container noVerticalPadding>
        <div
          css={css`
          border-top: 3px solid ${theme.colors.divider};
          padding: 50px 0;
          margin-top: 40px;
        `}
        >
          <div css={css`opacity: 0.7`}>
            <Twitter/>
            <GitHub/>
            <Email/>
            <Feed/>
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
  );
}

export default Footer
