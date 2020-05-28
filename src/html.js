import React from 'react'
import PropTypes from 'prop-types'

export default class HTML extends React.Component {
  render() {
    return (
      <html {...this.props.htmlAttributes}>
        <head>
          <meta charSet="utf-8" />
          <meta httpEquiv="x-ua-compatible" content="ie=edge" />
          <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png?v=JyB3qeXgBY" />
          <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png?v=JyB3qeXgBY" />
          <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png?v=JyB3qeXgBY" />
          <link rel="manifest" href="/site.webmanifest?v=JyB3qeXgBY" />
          <link rel="mask-icon" href="/safari-pinned-tab.svg?v=JyB3qeXgBY" color="#2e2f30" />
          <link rel="shortcut icon" href="/favicon.ico?v=JyB3qeXgBY" />
          <meta name="msapplication-TileColor" content="#2b5797" />
          <meta name="theme-color" content="#2e2f30" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no"
          />
          {this.props.headComponents}
        </head>
        <body {...this.props.bodyAttributes}>
          {this.props.preBodyComponents}
          <div
            key={`body`}
            id="___gatsby"
            dangerouslySetInnerHTML={{ __html: this.props.body }}
          />
          {this.props.postBodyComponents}
        </body>
      </html>
    )
  }
}

HTML.propTypes = {
  htmlAttributes: PropTypes.object,
  headComponents: PropTypes.array,
  bodyAttributes: PropTypes.object,
  preBodyComponents: PropTypes.array,
  body: PropTypes.string,
  postBodyComponents: PropTypes.array,
}
