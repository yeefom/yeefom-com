import React from 'react'
import styled from '@emotion/styled'
import { FiMoon, FiSun } from 'react-icons/fi'
import i18n from '../i18n'

const iconStyles = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  margin: '0',
}

const DarkMode = styled(FiMoon)(iconStyles)
const DefaultMode = styled(FiSun)(iconStyles)

const ThemeToggle = ({ toggleTheme, themeName }) => {
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
        borderWidth: '1.5px',
        borderStyle: 'solid',
        cursor: 'pointer',
        transition: 'all 150ms ease',
        ':hover': {
          borderWidth: '1.5px',
          background: 'none',
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
