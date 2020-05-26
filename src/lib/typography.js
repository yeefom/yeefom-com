import Typography from 'typography'

const fontArray = [
  'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto',
  'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', 'sans-serif'
]

export const fontFamily = "'system-ui',-apple-system,'BlinkMacSystemFont','Segoe UI','Roboto'," +
  "'Oxygen','Ubuntu','Cantarell','Fira Sans','Droid Sans','Helvetica Neue',sans-serif"

const typography = new Typography({
  baseFontSize: '18px',
  baseLineHeight: 1.55,
  headerFontFamily: fontArray,
  bodyFontFamily: fontArray,

  overrideStyles: ({ rhythm }) => ({
    h1: {
      fontSize: '1.7rem',
    },
    h2: {
      fontSize: '1.4rem',
    },
    'h1,h2,h3,h4': {
      lineHeight: 1.25,
      marginTop: rhythm(1),
      marginBottom: rhythm(1 / 2),
    },
    'h5,h6': {
      lineHeight: 1,
    }
  }),
})
// Hot reload typography in development.
if (process.env.NODE_ENV !== 'production') {
  typography.injectStyles()
}

export default typography
export const rhythm = typography.rhythm
export const scale = typography.scale
