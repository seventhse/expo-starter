import {
  DefaultTheme as NavigationDefaultTheme,
  ThemeProvider as NavigationThemeProvider,
} from '@react-navigation/native'
import { PropsWithChildren } from 'react'

export function ThemeProvider({ children }: PropsWithChildren) {
  return <NavigationThemeProvider value={NavigationDefaultTheme}>{children}</NavigationThemeProvider>
}
