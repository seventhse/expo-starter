import { ThemeTransitionOverlay } from '@/components/theme-transition-overlay'
import { Colors } from '@/constants/theme'
import { useThemeSync } from '@/hooks/use-theme-sync'
import { useAppStore } from '@/store/app.store'
import {
  DarkTheme as NavigationDarkTheme,
  DefaultTheme as NavigationDefaultTheme,
  ThemeProvider as NavigationThemeProvider,
} from '@react-navigation/native'
import { VariableContextProvider } from 'nativewind'
import { PropsWithChildren } from 'react'

function colorsToVariable(colors: Record<string, string>) {
  return Object.entries(colors).reduce<Record<string, string>>((pre, [key, value]) => {
    pre[`--color-${key}`] = value
    return pre
  }, {})
}

const navigationThemes = {
  default: {
    ...NavigationDefaultTheme,
    colors: {
      ...NavigationDefaultTheme.colors,
      primary: Colors.light['primary'],
      background: Colors.light['background'],
      card: Colors.light['card'],
      text: Colors.light['foreground'],
      border: Colors.light['border'],
    },
  },
  dark: {
    ...NavigationDarkTheme,
    colors: {
      ...NavigationDarkTheme.colors,
      primary: Colors.dark['primary'],
      background: Colors.dark['background'],
      card: Colors.dark['card'],
      text: Colors.dark['foreground'],
      border: Colors.dark['border'],
    },
  },
}

const variableValue = {
  light: colorsToVariable(Colors.light),
  dark: colorsToVariable(Colors.dark),
} as const

export function ThemeProvider({ children }: PropsWithChildren) {
  const colorScheme = useAppStore((s) => s.theme)
  const isDark = colorScheme === 'dark'

  useThemeSync()

  return (
    <VariableContextProvider value={isDark ? variableValue.dark : variableValue.light}>
      <NavigationThemeProvider value={isDark ? navigationThemes.dark : navigationThemes.default}>
        {children}
        <ThemeTransitionOverlay />
      </NavigationThemeProvider>
    </VariableContextProvider>
  )
}
