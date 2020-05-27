import React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import { css } from '@emotion/core'
import Container from './Container'
import i18n from '../i18n'

const Header = ({ pageName }) => {
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
        <h1>
          <Link
            to="/"
            aria-label={i18n.homeAria}
            css={css`
              text-decoration: none;
              font-size: 2.3rem;
              font-weight: 600;
              line-height: 1.55;
            `}
          >
            {title}
          </Link>
        </h1>
        <nav
          className="header-navigation dark-link"
          css={css`
            display: flex;
            justify-content: space-between;
            margin-top: 1rem;
            width: 7.5rem;
            font-size: 90%;
          `}
        >
          <Link
            to="/archive"
            aria-label={i18n.archiveAria}
            css={css`
              ${pageName === 'archive' ? 'font-weight: 600' : ''};
            `}
          >
            {i18n.archive}
          </Link>
          <Link
            to="/about"
            aria-label={i18n.aboutAria}
            css={css`
              ${pageName === 'about' ? 'font-weight: 600' : ''};
            `}
          >
            {i18n.about}
          </Link>
        </nav>
      </Container>
    </header>
  )
}

export default Header
