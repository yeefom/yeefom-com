import React from 'react'
import { Link, StaticQuery, graphql } from 'gatsby'
import { css } from '@emotion/core'
import { useTheme } from '../Theming'
import Links from './Links'

import Container from '../Container'

const Header = ({ siteTitle }) => {
  const theme = useTheme()
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
            font-size: 30px;
            color: white;
            &:hover {
              color: white;
              text-decoration: none;
            }
          `}
        >
          {siteTitle}
        </Link>
      </Container>
      <Container noVerticalPadding>
        <nav
          css={css`
            width: 100%;
            display: flex;
            justify-content: space-between;
            align-items: center;
          `}
        >
          <div
            css={css`
              font-size: 16px;
              line-height: 1.25;
              display: flex;
              align-items: center;
              a {
                text-decoration: none;
                color: ${theme.colors.white};
              }
              .active {
                display: none;
                visibility: hidden;
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
              <Links />
            </div>
          </div>
        </nav>
      </Container>
    </header>
  )
}

const ConnectedHeader = props => (
  <StaticQuery
    query={graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <Header siteTitle={data.site.siteMetadata.title} {...props} />
    )}
  />
)

export default ConnectedHeader
