import React from 'react'
import theme from 'prism-react-renderer/themes/oceanicNext'
import Highlight, { defaultProps } from 'prism-react-renderer'

const Code = ({ children, className = 'language-js' }) => {
  const language = className.replace(/language-/, '')

  return (
    <Highlight
      {...defaultProps}
      code={children.trim()}
      language={language}
      theme={theme}
    >
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <pre className={className} style={{ ...style, padding: '20px' }}>
          {tokens.map((line, i) => (
            <div key={i} {...getLineProps({ line, key: i })}>
              {line.map((token, key) => (
                <span key={key} {...getTokenProps({ token, key })} />
              ))}
            </div>
          ))}
        </pre>
      )}
    </Highlight>
  )
}

export default Code
