import { Colors } from '@/constants/theme'
import { useAppStore } from '@/store/app.store'
import { useMemo } from 'react'

export function useThemeColor(variant: keyof typeof Colors.light | keyof typeof Colors.dark) {
  const colorScheme = useAppStore((s) => s.theme)

  return useMemo(() => {
    return Colors[colorScheme][variant]
  }, [colorScheme, variant])
}
