import { Stack } from 'expo-router'
import { StatusBar } from 'expo-status-bar'

import { useThemeColor } from '@/hooks/use-theme'
import { ThemeProvider } from '@/providers/theme-provider'
import 'react-native-reanimated'
import '../global.css'

export const unstable_settings = {}

export default function RootLayout() {
  const backgroundColor = useThemeColor('background')

  return (
    <ThemeProvider>
      <Stack
        screenOptions={{
          headerStyle: {
            backgroundColor,
          },
          contentStyle: {
            backgroundColor,
          },
        }}
      >
        <Stack.Screen
          name="trip"
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen name="profile" options={{ headerShown: false, presentation: 'pageSheet' }} />
      </Stack>
      <StatusBar style="auto" />
    </ThemeProvider>
  )
}
