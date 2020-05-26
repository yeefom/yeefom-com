import React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import { css } from '@emotion/core'
import Container from './Container'
import i18n from '../i18n'

const Header = ({ pageUri }) => {
  const { site: { siteMetadata: { title } } } = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <header>
      <Container noVerticalPadding css={css`margin-bottom: 16px`}>
        <Link
          to="/"
          aria-label="go to homepage"
          css={css`
            text-decoration: none;
            font-size: 40px;
            font-weight: 600;
          `}
        >
          {title}
        </Link>
        <nav
          css={css`
            width: 100%;
            margin-top: 16px;
            font-size: 16px;
            line-height: 1.25;
          `}
        >
          <div
            css={css`
              width: 130px;
              display: flex;
              justify-content: space-between;
              align-items: center;
            `}
          >
            <Link
              to="/archive"
              aria-label={i18n.archiveAria}
              css={css`
                margin-left: 0;
                font-weight: ${pageUri === '/archive' ? '600' : '400'};
              `}
            >
              {i18n.archive}
            </Link>
            <Link
              to="/about"
              aria-label={i18n.aboutAria}
              css={css`
                font-weight: ${pageUri === '/about' ? '600' : '400'};
              `}
            >
              {i18n.about}
            </Link>
          </div>
        </nav>
      </Container>
    </header>
  )
}

export default Header
