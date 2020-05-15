import React from 'react'
import { Link } from 'gatsby'
import { css } from '@emotion/core'
import { useTheme } from '../Theming'
import ThemeToggler from './ThemeToggler'
import i18n from '../../i18n'

export default () => {
  const theme = useTheme()
  return (
    <React.Fragment>
      <Link to="/archive" activeClassName="active" aria-label={i18n.archiveAria} css={css`margin-left: 0`}>
        {i18n.archive}
      </Link>
      <Link to="/about" activeClassName="active" aria-label={i18n.aboutAria}>
        {i18n.about}
      </Link>

      <ThemeToggler
        css={{}}
        toggleTheme={theme.toggleTheme}
        themeName={theme.themeName}
      />
    </React.Fragment>
  )
}
