import React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import { css } from '@emotion/core'
import { useTheme } from '../Theming'
import Nav from './Nav'

import Container from '../Container'

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
        flex-shrink: 0;
        background: none;
        padding: 20px 0;
        background: ${theme.colors.headerBg};
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
            color: ${theme.colors.text};
            &:focus {
              color: ${theme.colors.text};
              outline: none;
            }
            &:hover {
              color: ${theme.colors.text};
              text-decoration: none;
            }
          `}
        >
          {title}
        </Link>
        <nav
          css={css`
            width: 100%;
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-top: 16px;
          `}
        >
          <div
            css={css`
              font-size: 16px;
              line-height: 1.25;
              display: flex;
              align-items: center;
              a {
                color: ${theme.colors.text};
              }
              a:hover {
                color: ${theme.colors.text};
              }
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
              <Nav />
            </div>
          </div>
        </nav>
      </Container>
    </header>
  )
}

export default Header
