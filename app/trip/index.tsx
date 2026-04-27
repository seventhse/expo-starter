import { ThemedText } from '@/components/ui/themd-text'
import { useAppStore } from '@/store/app.store'
import { useTranslation } from 'react-i18next'
import { Button, View } from 'react-native'

export default function TripHome() {
  const { t } = useTranslation()

  const userTheme = useAppStore((s) => s.userTheme)
  const theme = useAppStore((s) => s.theme)
  const systemUserTheme = useAppStore((s) => s.systemTheme)
  const setUserScheme = useAppStore((s) => s.setUserTheme)
  const language = useAppStore((s) => s.language)
  const setLanguage = useAppStore((s) => s.setLanguage)

  return (
    <View className="p-3">
      <ThemedText>user theme {userTheme}</ThemedText>
      <ThemedText>system theme {systemUserTheme}</ThemedText>
      <ThemedText>theme {theme}</ThemedText>
      <Button title="Toggle system theme" onPress={() => setUserScheme('unspecified')}></Button>
      <Button title="Toggle light theme" onPress={() => setUserScheme('light')}></Button>
      <Button title="Toggle dark theme" onPress={() => setUserScheme('dark')}></Button>

      <ThemedText>current language: {language}</ThemedText>
      <ThemedText>locale text: {t('hello')}</ThemedText>
      <Button title="switch to zh language" onPress={() => setLanguage('zh')}></Button>
      <Button title="switch to en language" onPress={() => setLanguage('en')}></Button>
    </View>
  )
}
