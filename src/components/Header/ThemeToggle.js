import React from 'react'
import styled from '@emotion/styled'
import { FiMoon, FiSun } from 'react-icons/fi'
import { useTheme } from '../Theming'
import i18n from '../../i18n'

const DarkMode = styled(FiMoon)({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  margin: '0',
})

const DefaultMode = styled(FiSun)({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  margin: '0',
})

const ThemeToggle = ({ toggleTheme, themeName }) => {
  const theme = useTheme()
  return (
    <button
      css={{
        borderRadius: '50%',
        width: '1.9rem',
        height: '1.9rem',
        padding: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        margin: 0,
        border: `1.5px solid ${theme.colors.text}`,
        color: theme.colors.text,
        background: theme.colors.headerBg,
        cursor: 'pointer',
        transition: 'all 150ms ease',
        ':hover': {
          background: 'none',
          borderColor: theme.colors.text,
          color: theme.colors.text,
          borderWidth: '1.5px',
        },
      }}
      aria-label={
        themeName === 'dark' ? i18n.switchToLightAria : i18n.switchToDarkAria
      }
      onClick={() => toggleTheme(themeName === 'dark' ? 'default' : 'dark')}
    >
      {themeName === 'dark' ? (
        <DefaultMode title={i18n.switchToLightAria} />
      ) : (
        <DarkMode title={i18n.switchToDarkAria} />
      )}
    </button>
  )
}
export default ThemeToggle
