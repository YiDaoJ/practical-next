import { ThemeProvider } from '@emotion/react';
import * as NextImage from 'next/image'
import { Themes, AppTheme } from '../styles/theme'

// add config for next image optimization
const OriginalNextImage = NextImage.default;

Object.defineProperty(
  NextImage, "default", {
    configurable: true,
    value: (props) => <OriginalNextImage {...props} unoptimized />
  }
)

const withThemeProvider = (Story, context) => {

  const background = context.globals.backgrounds?.value || parameters.backgrounds.defaultColor

  const theme: AppTheme = Object.values(Themes).find(theme => theme.background === background)

  return (
    <ThemeProvider theme={theme} >
      <Story {...context} />
    </ThemeProvider>

  )
}

export const decorators = [withThemeProvider]


export const parameters = {
  backgrounds: {
    default: 'dark',
    defaultColor: "#1e293b",
    values: [
      {name: "dark", value: "#1e293b"},
      {name: "light", value: "#f1f5f9"}
    ]
  },
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}