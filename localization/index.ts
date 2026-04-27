import { getLocales } from 'expo-localization'
import i18n, { InitOptions } from 'i18next'
import { initReactI18next } from 'react-i18next'

import en from './en.json'
import zh from './zh.json'

const resources = {
  en: { translation: en },
  zh: { translation: zh },
}

export const deviceLocal = getLocales()[0]?.languageCode ?? 'en'

const initOptions: InitOptions = {
  resources,
  lng: deviceLocal,
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
  load: 'languageOnly',

  returnNull: false,
}

// eslint-disable-next-line import/no-named-as-default-member
i18n.use(initReactI18next).init(initOptions)

export default i18n
