import React from 'react'
import { css } from '@emotion/core'
import { bpMaxSM } from '../lib/breakpoints'
import { useTheme } from './Theming'

const divider = (headerBg) => (
  <div css={css`
    border-top: 3px solid ${headerBg};
    margin-top: 50px;
    margin-bottom: 50px;
    `}
  >
    {''}
  </div>
)

const Container = props => {
  const {
    maxWidth = 700,
    noHorizontalPadding = false,
    noVerticalPadding = false,
    noDivider = false,
    ...restProps
  } = props
  const theme = useTheme()

  return (
    <div
      css={css`
        width: 100%;
        margin: 0 auto;
        max-width: ${maxWidth + (noHorizontalPadding ? 0 : 80)}px;
        padding: ${noVerticalPadding ? 0 : '40'}px
          ${noHorizontalPadding ? 0 : '40'}px;
        ${bpMaxSM} {
          padding: ${noVerticalPadding ? 0 : '20'}px
            ${noHorizontalPadding ? 0 : '20'}px;
        }
      `}
      {...restProps}
    >
      {props.children}
      {!noDivider && divider(theme.colors.divider)}
    </div>
  )
}

export default Container
