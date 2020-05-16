const path = require('path')

const _ = require('lodash')
const PAGINATION_OFFSET = 7

const createPosts = (createPage, createRedirect, edges) => {
  edges.forEach(({ node }, i) => {
    const prev = i === 0 ? null : edges[i - 1].node
    const next = i === edges.length - 1 ? null : edges[i + 1].node
    const pagePath = node.fields.slug

    if (node.fields.redirects) {
      node.fields.redirects.forEach(fromPath => {
        createRedirect({
          fromPath,
          toPath: pagePath,
          redirectInBrowser: true,
          isPermanent: true,
        })
      })
    }

    createPage({
      path: pagePath,
      component: path.resolve(`./src/templates/post.js`),
      context: {
        id: node.id,
        prev,
        next,
      },
    })
  })
}

const createArchivePage = (createPage) => {
  createPage({
    path: '/archive',
    component: path.resolve(`src/templates/archive.js`)
  })
}

const createAboutPage = (createPage) => {
  createPage({
    path: '/about',
    component: path.resolve(`src/templates/about.js`)
  })
}

const createIndexPages = (createPage, edges) => {
  const pages = edges.filter(edge => edge.node.fields.type === 'blog')
    .reduce((acc, value, index) => {
      const pageIndex = Math.floor(index / PAGINATION_OFFSET)

      if (!acc[pageIndex]) {
        acc[pageIndex] = []
      }

      acc[pageIndex].push(value.node.id)

      return acc
    }, [])

  pages.forEach((page, index) => {
    createPage({
      path: index === 0 ? '/' : `/${index}`,
      component: path.resolve(`src/templates/index.js`),
      context: {
        pagination: {
          page,
          nextPagePath: index === pages.length - 1 ? null : `/${index + 1}`,
          previousPagePath: index === 0 ? null : `/${index - 1 === 0 ? '' : index - 1}`,
          pageCount: pages.length,
        },
        categories: []
      },
    })
  })
}

exports.createPages = ({ actions, graphql }) =>
  graphql(`
    query {
      allMdx(
        sort: { order: DESC, fields: [frontmatter___date] }
      ) {
        edges {
          node {
            id
            parent {
              ... on File {
                name
                sourceInstanceName
              }
            }
            excerpt(pruneLength: 250)
            fields {
              title
              slug
              date
              type
            }
          }
        }
      }
    }
  `).then(({ data, errors }) => {
    if (errors) {
      return Promise.reject(errors)
    }

    if (_.isEmpty(data.allMdx)) {
      return Promise.reject('There are no posts!')
    }

    const { edges } = data.allMdx
    const { createRedirect, createPage } = actions
    createPosts(createPage, createRedirect, edges)
    createIndexPages(createPage, edges, {})
    createArchivePage(createPage)
    createAboutPage(createPage)
  })

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      modules: [path.resolve(__dirname, 'src'), 'node_modules'],
      alias: {
        'react-dom': '@hot-loader/react-dom',
        $components: path.resolve(__dirname, 'src/components'),
      },
    },
  })
}

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions

  if (node.internal.type === `Mdx`) {
    const parent = getNode(node.parent)
    const type = parent.sourceInstanceName
    const slug = type === 'blog'
      ? `blog/${node.frontmatter.slug}`
      : node.frontmatter.slug

    createNodeField({
      name: 'id',
      node,
      value: node.id,
    })

    createNodeField({
      name: 'title',
      node,
      value: node.frontmatter.title,
    })

    createNodeField({
      name: 'description',
      node,
      value: node.frontmatter.description,
    })

    createNodeField({
      name: 'slug',
      node,
      value: slug,
    })

    createNodeField({
      name: 'date',
      node,
      value: node.frontmatter.date ? node.frontmatter.date.split(' ')[0] : '',
    })

    createNodeField({
      name: 'keywords',
      node,
      value: node.frontmatter.keywords || [],
    })

    createNodeField({
      name: 'redirects',
      node,
      value: node.frontmatter.redirects,
    })

    createNodeField({
      name: 'type',
      node,
      value: type,
    })
  }
}
