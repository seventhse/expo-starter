import { IconSymbol } from '@/components/ui/icon-symbol'
import { ThemedText } from '@/components/ui/themd-text'
import { useThemeColor } from '@/hooks/use-theme'
import { Link, Stack } from 'expo-router'
import { View } from 'react-native'

export default function TripLayout() {
  const backgroundColor = useThemeColor('background')

  return (
    <Stack
      screenOptions={{
        headerShadowVisible: false,
        headerStyle: {
          backgroundColor,
        },
        contentStyle: {
          backgroundColor,
        },
      }}
    >
      <Stack.Screen
        name="index"
        options={{
          title: 'Trip',
          headerTitleAlign: 'left',
          headerTitle: () => {
            return (
              <View className="flex-1 flex-row items-center justify-between">
                <ThemedText className="text-primary" variant={'largeTitle'}>
                  Trip
                </ThemedText>
                <Link href={'/profile'}>
                  <IconSymbol name={'person.circle'} size={32} />
                </Link>
              </View>
            )
          },
        }}
      />
    </Stack>
  )
}
