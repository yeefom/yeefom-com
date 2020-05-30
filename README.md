# Yeefom.com

Source code for [yeefom.com](http://yeefom.com). Built with [Gatsby](https://www.gatsbyjs.org).

## Preparation

- Install Node 12, Yarn 1.x, and Gatsby CLI.
- Fork the repo or use it as a [template](https://help.github.com/en/github/creating-cloning-and-archiving-repositories/creating-a-repository-from-a-template).
- Create a `content` directory at root with following structure inside:

```
blog/
images/
pages/
config.js
```

Markdown, MDX, or image file in any of the three folders above will be sourced. The separation is for organization only.

`config.js` contains site-wise metadata. An example config object is provided inside `gatsby-config.js`.

I keep `content`  as a git submodule to separate content management. Modify `.gitmodules` to point to your own content repo. You can also commit `content` with the rest of the codebase. Delete `.gitmodules` if you choose to do so.

## Development

- `yarn`: install dependencies
- `gatsby develop`: start development server
- `yarn build`: build production site
- `yarn serve`: build production site and serve it locally


## Best practices

The objectives of the best practices are clean code and performance. Understanding the design intention behind each practice is more important than just following them.

- Prefer Gatsby’s server side rendered static content over client side JavaScript.
- Leverage Gatsby’s page auto-generation by placing page inside `src/pages` when possible. Pass down `id` or other identifier to page query.
- Retrieve only necessary data using GraphQL. Minimize data filtering in JavaScript.
- Use `useStaticQuery` in components for data needs.
- Store UI strings in `i18n/`. Avoid hardcoded strings in components or pages.
- Expose frontmatter data through `fields` by using Gatsby’s `createNodeField` action inside `onCreateNode` API. Limit direct access to frontmatter data in components and pages.
- Keep shared styling and styling regarding light and dark color schemes in `globalStyles`. Avoid unnecessary duplication and overriding.
- Make sure HTML is semantically correct. Always have accessibility in mind.

## Notes

Unmet peer dependencies are installed explicitly. They are currently the following:

```
"@babel/core": "^7.10.1"
"react": "^16.13.1"
"react-dom": "^16.13.1"
"react-refresh": "^0.8.3"
"typescript": "^3.9.3"
```
