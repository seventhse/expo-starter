/**
 * Below are the colors that are used in the app. The colors are defined in the light and dark mode.
 * There are many other ways to style your app. For example, [Nativewind](https://www.nativewind.dev/), [Tamagui](https://tamagui.dev/), [unistyles](https://reactnativeunistyles.vercel.app), etc.
 */

import { Platform } from 'react-native'

export const Colors = {
  light: {
    background: '#f8fafc',
    foreground: '#1e293b',

    card: '#ffffff',
    'card-foreground': '#1e293b',

    primary: '#6366f1',
    'primary-foreground': '#ffffff',

    secondary: '#e5e7eb',
    'secondary-foreground': '#374151',

    muted: '#f3f4f6',
    'muted-foreground': '#6b7280',

    accent: '#e0e7ff',
    'accent-foreground': '#374151',

    destructive: '#ef4444',
    'destructive-foreground': '#ffffff',

    border: '#d1d5db',
    input: '#d1d5db',
  },
  dark: {
    background: '#0f172a',
    foreground: '#e2e8f0',

    card: '#1e293b',
    'card-foreground': '#e2e8f0',

    primary: '#818cf8',
    'primary-foreground': '#0f172a',

    secondary: '#2d3748',
    'secondary-foreground': '#d1d5db',

    muted: '#152032',
    'muted-foreground': '#9ca3af',

    accent: '#374151',
    'accent-foreground': '#d1d5db',

    destructive: '#ef4444',
    'destructive-foreground': '#0f172a',
    border: '#4b5563',
    input: '#4b5563',
  },
} as const

export const Fonts = Platform.select({
  ios: {
    /** iOS `UIFontDescriptorSystemDesignDefault` */
    sans: 'system-ui',
    /** iOS `UIFontDescriptorSystemDesignSerif` */
    serif: 'ui-serif',
    /** iOS `UIFontDescriptorSystemDesignRounded` */
    rounded: 'ui-rounded',
    /** iOS `UIFontDescriptorSystemDesignMonospaced` */
    mono: 'ui-monospace',
  },
  default: {
    sans: 'normal',
    serif: 'serif',
    rounded: 'normal',
    mono: 'monospace',
  },
  web: {
    sans: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
    serif: "Georgia, 'Times New Roman', serif",
    rounded: "'SF Pro Rounded', 'Hiragino Maru Gothic ProN', Meiryo, 'MS PGothic', sans-serif",
    mono: "SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace",
  },
})
