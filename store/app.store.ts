import i18n, { deviceLocal } from '@/localization'
import { ColorSchemeName } from 'react-native'
import { create } from 'zustand'

export type Language = 'en' | 'zh'

export interface AppState {
  systemTheme: 'dark' | 'light'
  userTheme: ColorSchemeName
  theme: 'light' | 'dark'
  setUserTheme: (theme: ColorSchemeName) => void
  setSystemTheme: (theme: 'dark' | 'light') => void
  setTheme: (theme: 'dark' | 'light') => void

  language: Language
  setLanguage: (language: Language) => void
}

export const useAppStore = create<AppState>((set, get) => ({
  systemTheme: 'light',
  userTheme: 'unspecified',
  theme: 'light',
  language: deviceLocal as Language,
  setUserTheme: (theme) => {
    set({ userTheme: theme })
  },
  setSystemTheme: (theme) => {
    set({ systemTheme: theme })
  },
  setTheme: (theme) => {
    set({ theme })
  },
  setLanguage: (language) => {
    i18n.changeLanguage(language)
    set({ language })
  },
}))
