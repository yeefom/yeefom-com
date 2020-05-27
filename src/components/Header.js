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
          css={css`
            width: 100%;
            margin-top: 1rem;
          `}
        >
          <div
            css={css`
              width: 7.5rem;
              display: flex;
              justify-content: space-between;
              align-items: center;
            `}
          >
            <Link
              to="/archive"
              aria-label={i18n.archiveAria}
              className="black-link"
              css={css`
                margin-left: 0;
                font-weight: ${pageName === 'archive' ? '600' : '400'};
              `}
            >
              {i18n.archive}
            </Link>
            <Link
              to="/about"
              aria-label={i18n.aboutAria}
              className="black-link"
              css={css`
                font-weight: ${pageName === 'about' ? '600' : '400'};
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
