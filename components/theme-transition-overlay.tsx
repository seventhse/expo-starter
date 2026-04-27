import { Colors } from '@/constants/theme'
import { useAppStore } from '@/store/app.store'
import { useLayoutEffect } from 'react'
import { StyleSheet, View } from 'react-native'
import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated'
import { runOnJS } from 'react-native-worklets'

export function ThemeTransitionOverlay() {
  const userTheme = useAppStore((s) => s.userTheme)
  const systemTheme = useAppStore((s) => s.systemTheme)
  const colorScheme = userTheme === 'unspecified' ? systemTheme : userTheme
  const setTheme = useAppStore((s) => s.setTheme)

  const prevTheme = useSharedValue(colorScheme)

  const scale = useSharedValue(0)
  const maskStyle = useAnimatedStyle(() => ({
    backgroundColor: Colors[prevTheme.value].background,
    transform: [{ scale: scale.value * 50 }],
  }))

  useLayoutEffect(() => {
    prevTheme.value = colorScheme
    scale.value = withTiming(
      1,
      { duration: 1000, easing: Easing.out(Easing.cubic) },
      (finished) => {
        if (finished) {
          runOnJS(setTheme)(colorScheme)
          scale.value = withTiming(0, { duration: 500, easing: Easing.out(Easing.cubic) })
        }
      }
    )
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userTheme])

  return (
    <View pointerEvents={'none'} style={[StyleSheet.absoluteFill]}>
      <Animated.View
        className={'absolute -top-3 -left-3 h-12 w-12 rounded-full'}
        style={[maskStyle]}
      />
    </View>
  )
}
