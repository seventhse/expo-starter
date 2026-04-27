// Fallback for using MaterialIcons on Android and web.

import { Colors } from '@/constants/theme'
import MaterialIcons from '@expo/vector-icons/MaterialIcons'
import { SymbolViewProps, SymbolWeight } from 'expo-symbols'
import { ComponentProps } from 'react'
import { OpaqueColorValue, useColorScheme, type StyleProp, type TextStyle } from 'react-native'

type IconMapping = Record<
  // @ts-ignore
  SymbolViewProps['name'],
  ComponentProps<typeof MaterialIcons>['name']
>
type IconSymbolName = keyof typeof MAPPING

/**
 * Add your SF Symbols to Material Icons mappings here.
 * - see Material Icons in the [Icons Directory](https://icons.expo.fyi).
 * - see SF Symbols in the [SF Symbols](https://developer.apple.com/sf-symbols/) app.
 */
const MAPPING = {
  'house.fill': 'home',
  'paperplane.fill': 'send',
  'chevron.left.forwardslash.chevron.right': 'code',
  'chevron.right': 'chevron-right',
} as IconMapping

/**
 * An icon component that uses native SF Symbols on iOS, and Material Icons on Android and web.
 * This ensures a consistent look across platforms, and optimal resource usage.
 * Icon `name`s are based on SF Symbols and require manual mapping to Material Icons.
 */
export function IconSymbol({
  name,
  size = 24,
  color,
  style,
}: {
  name: IconSymbolName
  size?: number
  color?: string | OpaqueColorValue
  style?: StyleProp<TextStyle>
  weight?: SymbolWeight
}) {
  const colorSchema = useColorScheme()

  if (color === undefined) {
    color =
      colorSchema === 'dark'
        ? Colors.dark['--color-foreground']
        : Colors.light['--color-foreground']
  }

  return (
    <MaterialIcons
      color={color}
      size={size}
      // @ts-ignore
      name={MAPPING[name]}
      style={style}
    />
  )
}
