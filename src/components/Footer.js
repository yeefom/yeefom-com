import React from 'react'
import { css } from '@emotion/core'
import { useStaticQuery, graphql } from 'gatsby'
import { Twitter, GitHub, Feed, Email } from './Social'
import Container from './Container'
import { useTheme } from './Theming'

const Footer = () => {
  const theme = useTheme()
  const { site: { siteMetadata: { author, footer } } } = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          author {
            name
          }
          footer {
            copyRightYears
            twitter
            github
            email
            feedPath
          }
        }
      }
    }
  `)

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
          <div css={css`
            opacity: 0.7;
            a {
              color: ${theme.colors.text};
              :hover {
                color: ${theme.colors.text};
              }
              :not(:first-of-type) {
                margin-left: 10px;
              }
            }
          `}>
            <Twitter target={footer.twitter}/>
            <GitHub target={footer.github}/>
            <Email target={footer.email}/>
            <Feed target={footer.feedPath}/>
          </div>
          <div
            css={css`
              margin-top: 16px;
              font-size: 93%;
              opacity: 0.7;
            `}
          >
            {`${author.name} \u00A9 ${footer.copyRightYears}`}
          </div>
        </div>
      </Container>
    </footer>
  );
}

export default Footer
