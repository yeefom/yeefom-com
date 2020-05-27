import React from 'react'
import { css } from '@emotion/core'
import { useStaticQuery, graphql } from 'gatsby'
import { Twitter, GitHub, Feed, Email } from './Social'
import Container from './Container'

const Footer = () => {
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
        <div className="footer-container">
          <div className="social-container">
            <Twitter target={footer.twitter}/>
            <GitHub target={footer.github}/>
            <Email target={footer.email}/>
            <Feed target={footer.feedPath}/>
          </div>
          <div
            css={css`
              margin-top: 1rem;
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
