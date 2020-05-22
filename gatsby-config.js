const fs = require('fs')
const path = require('path')
const remarkFootnotesPlugin = require('remark-numbered-footnote-labels')

let config = {
  siteTitle: 'Example site',
  siteTitleShort: 'Example',
  siteUrl: 'https://example.com',
  siteLanguage: 'en',
  siteLogo: 'images/logo.png',
  siteDescription: 'Example site',
  siteKeywords: 'personal site, blog',
  author: 'Example author',
  aboutDescription: 'about page',
  archiveDescription: 'archive page',

  // Manifest and Progress color
  themeColor: '#5348FF',
  backgroundColor: '#2b2e3c',

  // footer
  copyRightYears: '2020–2020',
  twitter: 'https://twitter.com/',
  twitterHandle: '@',
  github: 'https://github.com/',
  email: 'mailto:example@example.com',
  feed: 'feed.xml'
}

if (fs.existsSync(path.resolve('./content/config.js'))) {
  config = require('./content/config.js')
}

module.exports = {
  siteMetadata: {
    siteUrl: config.siteUrl,
    title: config.siteTitle,
    description: config.siteDescription,
    keywords: 'personal site, blog',
    canonicalUrl: config.siteUrl,
    image: config.siteLogo,
    aboutDescription: config.aboutDescription,
    archiveDescription: config.archiveDescription,
    author: {
      name: config.author
    },
    social: {
      twitterHandle: config.twitterHandle,
    },
    footer: {
      copyRightYears: config.copyRightYears,
      twitter: config.twitter,
      github: config.github,
      email: config.email,
      feedPath: `/${config.feed}`
    }
  },
  plugins: [
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/content/blog`,
        name: 'blog',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/content/pages`,
        name: 'page',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/content/images`,
        name: 'image',
      },
    },
    'gatsby-plugin-sharp',
    'gatsby-remark-images',
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: ['.mdx', '.md', '.markdown'],
        gatsbyRemarkPlugins: [
          {
            resolve: 'gatsby-remark-images',
            options: {
              backgroundColor: 'none',
              disableBgImage: true,
              maxWidth: 1035,
            },
          },
        ],
        remarkPlugins: [
          remarkFootnotesPlugin
        ]
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-emotion',
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: config.siteTitle,
        short_name: config.siteTitleShort,
        description: config.siteDescription,
        start_url: '/',
        background_color: config.backgroundColor,
        theme_color: config.themeColor,
        display: 'standalone',
        icons: [
          {
            src: '/android-chrome-192x192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: '/android-chrome-512x512.png',
            sizes: '512x512',
            type: 'image/png',
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-feed`,
      options: {
        query: `
          {
            site {
              siteMetadata {
                title
                description
                siteUrl
                site_url: siteUrl
                author {
                  name
                }
              }
            }
          }
        `,
        feeds: [
          {
            serialize: ({ query: { site, allMdx } }) => {
              return allMdx.edges.map(edge => {
                return Object.assign({}, edge.node.frontmatter, {
                  description: edge.node.html,
                  url: site.siteMetadata.siteUrl + edge.node.fields.pagePath,
                })
              })
            },
            query: `
              {
                allMdx(
                  limit: 1000,
                  filter: { fields: { type: { eq: "blog" } } }
                  sort: { order: DESC, fields: [frontmatter___date] }
                ) {
                  edges {
                    node {
                      fields {
                        pagePath
                      }
                      frontmatter {
                        title
                        date
                      }
                      html
                    }
                  }
                }
              }
            `,
            title: `${config.siteTitle} RSS Feed`,
            author: config.author,
            output: config.feed
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/lib/typography`,
      },
    },
  ],
}
