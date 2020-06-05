import React from 'react'
import { css } from '@emotion/core'
import { bpMaxSM, bpMinLG } from '../lib/breakpoints'

const Container = props => {
  const {
    noHorizontalPadding = false,
    noVerticalPadding = false,
    ...restProps
  } = props

  const maxWidth = 700
  const maxWidthLg = maxWidth + 100

  return (
    <div
      css={css`
        width: 100%;
        margin: 0 auto;
        max-width: ${noHorizontalPadding ? 0 : `${maxWidth + 80}px`};
        padding: ${noVerticalPadding ? 0 : '40px'} ${noHorizontalPadding ? 0 : '40px'};
        ${bpMaxSM} {
          padding: ${noVerticalPadding ? 0 : '20px'} ${noHorizontalPadding ? 0 : '20px'};
        }
        ${bpMinLG} {
          max-width: ${noHorizontalPadding ? 0 : `${maxWidthLg + 80}px`};
        }
      `}
      {...restProps}
    >
      {props.children}
    </div>
  )
}

export default Container
