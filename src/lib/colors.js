const colors = {
  black: '#131415',
  lighterBlack: 'rgb(19, 20, 21)',
  lightBlack: '#242526',
  white: '#fff',
  white2: '#fafafa',
  offWhite: '#f2f0ed',
  lightGrey: '#bfbfbf',
  grey: '#5a5b5c',
  darkGrey: 'rgba(110,110,110,0.5)',
  red: '#E74C3C',
  blue: '#06c',
  green: '#29B573',
}

const light = {
  text: colors.lighterBlack,
  bodyBg: colors.white,
  headerBg: colors.offWhite,
  blockquote: colors.grey,
  link: colors.blue,
  divider: colors.offWhite,
  footnotePopover: colors.white2,
  footnoteButtonText: colors.white,
  footnoteButtonBackground: colors.darkGrey,
}

const dark = {
  text: colors.white,
  bodyBg: colors.black,
  headerBg: colors.lightBlack,
  blockquote: colors.lightGrey,
  link: colors.white,
  divider: colors.white,
  footnotePopover: colors.white2,
  footnoteButtonText: colors.white,
  footnoteButtonBackground: colors.darkGrey,
}

export { light, dark }
