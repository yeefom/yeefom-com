import { darken, lighten } from 'polished'

const colors = {
  black: '#131415',
  white: '#fff',
  offWhite: '#f2f0ed',
  gray: '#242526',
  darkGray: 'rgba(110,110,110,0.5)',
  red: '#E74C3C',
  blue: '#06c',
  green: '#29B573',
}

const light = {
  primary: colors.blue,
  text: colors.black,
  bodyBg: colors.white,
  headerBg: colors.offWhite,
  blockquote: lighten(0.4, colors.black),
  link: colors.blue,
  divider: colors.offWhite,
  footnoteButtonText: colors.white,
  footnoteButtonBackground: colors.darkGray,
}

const dark = {
  primary: lighten(0.05, colors.blue),
  text: colors.white,
  bodyBg: colors.black,
  headerBg: colors.gray,
  blockquote: darken(0.25, colors.white),
  link: lighten(0.05, colors.white),
  divider: lighten(0.05, colors.white),
  footnoteButtonText: colors.white,
  footnoteButtonBackground: colors.darkGray,
}

export { light, dark }
