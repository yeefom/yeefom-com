import React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import { css } from '@emotion/core'
import { useTheme } from './Theming'

import Container from './Container'
import i18n from '../i18n'
import ThemeToggle from './ThemeToggle'

const Header = () => {
  const theme = useTheme()
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
    <header
      css={css`
        width: 100%;
        padding: 20px 0;
        background: ${theme.colors.headerBg};
        a {
          color: ${theme.colors.text};
          &:focus {
            color: ${theme.colors.text};
            outline: none;
          }
          &:hover {
            color: ${theme.colors.text};
            text-decoration: none;
          }
        }
        button {
          color: ${theme.colors.text};
          background: ${theme.colors.headerBg};
          border-color: ${theme.colors.text};
          &:{
            color: ${theme.colors.text};
            border-color: ${theme.colors.text};
          }
        }
      `}
    >
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
            .active {
              font-weight: 600;
            }
          `}
        >
          <div
            css={css`
              width: 200px;
              display: flex;
              justify-content: space-between;
              align-items: center;
            `}
          >
            <Link to="/archive" activeClassName="active" aria-label={i18n.archiveAria} css={css`margin-left: 0`}>
              {i18n.archive}
            </Link>
            <Link to="/about" activeClassName="active" aria-label={i18n.aboutAria}>
              {i18n.about}
            </Link>

            <ThemeToggle
              toggleTheme={theme.toggleTheme}
              themeName={theme.themeName}
            />
          </div>
        </nav>
      </Container>
    </header>
  )
}

export default Header
