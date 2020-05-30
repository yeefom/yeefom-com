const fs = require('fs')
const path = require('path')
const remarkFootnotesPlugin = require('remark-numbered-footnote-labels')

let config = {
  title: 'website title',
  siteUrl: 'base url',
  logo: 'android-chrome-512x512.png',
  description: 'website description',
  keywords: 'keyword 1, keyword 2',
  author: 'author name',
  aboutDescription: 'about page',
  archiveDescription: 'archive page',

  // Manifest and Progress color
  themeColor: '#5348FF',
  backgroundColor: '#2b2e3c',

  // footer
  copyRightYears: '2020–2020',
  twitter: 'twitter profile url',
  twitterHandle: 'twitter handle starting with @',
  github: 'github profile url',
  email: 'email address starting with mailto:',
  feed: 'feed.xml'
}

if (fs.existsSync(path.resolve('./content/config.js'))) {
  config = require('./content/config.js')
}

module.exports = {
  siteMetadata: {
    siteUrl: config.siteUrl,
    title: config.title,
    description: config.description,
    keywords: config.keywords,
    canonicalUrl: config.siteUrl,
    image: config.logo,
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
      resolve: `gatsby-plugin-catch-links`,
      options: {
        excludePattern: /\.(xml|txt)$/,
      },
    },
    {
      resolve: `gatsby-plugin-feed`,
      options: {
        feeds: [
          {
            serialize: ({ query: { allMdx } }) => {
              return allMdx.edges.map(edge => {
                return Object.assign({}, edge.node.frontmatter, {
                  description: edge.node.html,
                  url: config.siteUrl + edge.node.fields.pagePath,
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
            title: `${config.title} RSS Feed`,
            author: config.author,
            output: config.feed
          },
        ],
      },
    },
    `gatsby-plugin-sitemap`,
  ],
}
