const path = require('path')

const PAGINATION_OFFSET = 7

const createPosts = (createPage, edges) => {
  edges.forEach(({ node }, i) => {
    const prev = i === 0 ? null : edges[i - 1].node
    const next = i === edges.length - 1 ? null : edges[i + 1].node

    createPage({
      path: node.fields.pagePath,
      component: path.resolve(`./src/templates/post.js`),
      context: {
        id: node.id,
        prev: prev ? {
          pagePath: prev.fields.pagePath,
          title: prev.frontmatter.title
        } : null,
        next: next ? {
          pagePath: next.fields.pagePath,
          title: next.frontmatter.title
        } : null
      },
    })
  })
}

const createIndexPages = (createPage, createRedirect, edges) => {
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
    const pageIndex = index + 1;
    createPage({
      path: pageIndex === 1 ? '/' : `/page/${pageIndex}`,
      component: path.resolve(`./src/templates/index.js`),
      context: {
        pagePosts: page,
        pagination: {
          nextPagePath: pageIndex === pages.length ? null : `/page/${pageIndex + 1}`,
          previousPagePath: pageIndex === 1 ? null : `${pageIndex === 2 ? '/' : `/page/${pageIndex - 1}`}`,
          pageCount: pages.length,
        }
      },
    })
  })

  createRedirect({
    fromPath: '/page/1',
    toPath: '/',
    redirectInBrowser: true,
    isPermanent: true,
  })
}

exports.createPages = ({ actions, graphql }) =>
  graphql(`
    query {
      allMdx(
        sort: { order: DESC, fields: [frontmatter___date] }
        filter: { fields: { type: { eq: "blog" } } }
      ) {
        edges {
          node {
            id
            fields {
              pagePath
              type
            }
            frontmatter {
              title
              date
            }
          }
        }
      }
    }
  `).then(({ data, errors }) => {
    if (errors) {
      return Promise.reject(errors)
    }

    if (!data.allMdx || !data.allMdx.edges) {
      return Promise.reject('There are no posts!')
    }

    const { edges } = data.allMdx
    const { createRedirect, createPage } = actions
    createPosts(createPage, edges)
    createIndexPages(createPage, createRedirect, edges)
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
    const pagePath = type === 'blog'
      ? `/blog/${node.frontmatter.slug}`
      : `/${node.frontmatter.slug}`

    createNodeField({
      name: 'pagePath',
      node,
      value: pagePath,
    })

    createNodeField({
      name: 'type',
      node,
      value: type,
    })
  }
}
