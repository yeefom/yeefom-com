import { createTheming } from '@callstack/react-theme-provider'
import {darken, lighten} from 'polished'
import colors from '../lib/colors'

const themes = {
  default: {
    themeName: 'default',
    colors: {
      primary: colors.blue,
      text: colors.black,
      bodyBg: colors.white,
      headerBg: colors.offWhite,
      blockquote: lighten(0.4, colors.black),
      link: colors.blue,
      divider: colors.offWhite,
      ...colors,
    },
  },
  dark: {
    themeName: 'dark',
    colors: {
      primary: lighten(0.05, colors.blue),
      text: colors.white,
      bodyBg: colors.black,
      headerBg: colors.black,
      blockquote: darken(0.25, colors.white),
      link: lighten(0.05, colors.white),
      divider: lighten(0.05, colors.white),
      ...colors,
    },
  },
}

const { ThemeProvider, withTheme, useTheme } = createTheming(themes.default)

export { ThemeProvider, withTheme, useTheme, themes, colors }
