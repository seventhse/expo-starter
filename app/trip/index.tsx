import { ThemedText } from '@/components/ui/themd-text'
import { useAppStore } from '@/store/app.store'
import { Button, View } from 'react-native'

export default function TripHome() {
  const userTheme = useAppStore((s) => s.userTheme)
  const theme = useAppStore((s) => s.theme)
  const systemUserTheme = useAppStore((s) => s.systemTheme)
  const setUserScheme = useAppStore((s) => s.setUserTheme)

  return (
    <View className="p-3">
      <ThemedText>user theme {userTheme}</ThemedText>
      <ThemedText>system theme {systemUserTheme}</ThemedText>
      <ThemedText>theme {theme}</ThemedText>
      <Button title="Toggle system theme" onPress={() => setUserScheme('unspecified')}></Button>
      <Button title="Toggle light theme" onPress={() => setUserScheme('light')}></Button>
      <Button title="Toggle dark theme" onPress={() => setUserScheme('dark')}></Button>
    </View>
  )
}
