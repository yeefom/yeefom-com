import Typography from 'typography'

const fontArray = [
  'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto',
  'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', 'sans-serif'
]

const typography = new Typography({
  baseFontSize: '18px',
  baseLineHeight: 1.55,
  headerFontFamily: fontArray,
  bodyFontFamily: fontArray,
  overrideStyles: () => ({
    h1: {
      fontSize: '1.6rem',
    },
    h2: {
      fontSize: '1.35rem',
    },
    h3: {
      fontSize: '1.15rem',
    },
    'h1,h2,h3,h4': {
      lineHeight: 1.4,
      marginTop: '1.4rem',
      marginBottom: '1rem',
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
