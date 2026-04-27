import { ColorSchemeName } from 'react-native'
import { create } from 'zustand'

export interface AppState {
  systemTheme: 'dark' | 'light'
  userTheme: ColorSchemeName
  theme: 'light' | 'dark'
  setUserTheme: (theme: ColorSchemeName) => void
  setSystemTheme: (theme: 'dark' | 'light') => void
  setTheme: (theme: 'dark' | 'light') => void
}

export const useAppStore = create<AppState>((set, get) => ({
  systemTheme: 'light',
  userTheme: 'unspecified',
  theme: 'light',
  setUserTheme: (theme) => {
    set({ userTheme: theme })
  },
  setSystemTheme: (theme) => {
    set({ systemTheme: theme })
  },
  setTheme: (theme) => {
    set({ theme })
  },
}))
