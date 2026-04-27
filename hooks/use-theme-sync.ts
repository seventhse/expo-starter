import { useAppStore } from '@/store/app.store'
import { useEffect } from 'react'
import { Appearance, ColorSchemeName } from 'react-native'

export function useThemeSync() {
  const userTheme = useAppStore((s) => s.userTheme)
  const setSystemTheme = useAppStore((s) => s.setSystemTheme)
  const setTheme = useAppStore((s) => s.setTheme)

  const apply = (newTheme?: ColorSchemeName) => {
    const theme = (newTheme ?? Appearance.getColorScheme()) === 'dark' ? 'dark' : 'light'
    setSystemTheme(theme)
    if (userTheme === 'unspecified') {
      setTheme(theme)
    }
  }

  useEffect(() => {
    apply()
    const sub = Appearance.addChangeListener(({ colorScheme }) => {
      apply(colorScheme)
    })
    return () => sub.remove()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
}
