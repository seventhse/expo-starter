import { Stack } from 'expo-router'
import { StatusBar } from 'expo-status-bar'

import { ThemeProvider } from '@/providers/theme-provider'
import 'react-native-reanimated'

export const unstable_settings = {}

export default function RootLayout() {
  return (
    <ThemeProvider>
      <Stack></Stack>
      <StatusBar style="auto" />
    </ThemeProvider>
  )
}
