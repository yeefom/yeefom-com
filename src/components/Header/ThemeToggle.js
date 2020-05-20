import React from 'react'
import Button from './Button'
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
    <Button
      css={{
        borderRadius: '50%',
        width: '2.375rem',
        height: '2.375rem',
        padding: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        margin: 0,
        borderStyle: 'solid',
        borderWidth: '1px',
        color: theme.colors.text,
        background: theme.colors.headerBg,
        '@media (hover: hover)': {
          ':hover': {
            background: 'none',
            borderColor: theme.colors.text,
            color: theme.colors.text
          },
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
    </Button>
  )
}
export default ThemeToggle
