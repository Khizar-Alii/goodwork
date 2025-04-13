import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import AsyncStorage from '@react-native-async-storage/async-storage';
import en from '../global/locales/en.json';
import ur from '../global/locales/ur.json';

const LANGUAGE_KEY = 'user-language';

const languageDetector = {
  type: 'languageDetector',
  async: true,
  detect: (callback: (lang: string) => void) => {
    AsyncStorage.getItem(LANGUAGE_KEY).then((lang) => {
      callback(lang || 'en');
    });
  },
  init: () => {},
  cacheUserLanguage: (lang: string) => {
    AsyncStorage.setItem(LANGUAGE_KEY, lang);
  },
};

i18n
  .use(languageDetector as any)
  .use(initReactI18next)
  .init({
    compatibilityJSON: 'v3',
    fallbackLng: 'en',
    resources: {
      en: { translation: en },
      ur: { translation: ur },
    },
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
