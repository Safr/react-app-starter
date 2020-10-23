/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import i18next, { i18n as Ii18n } from 'i18next';
import { initReactI18next } from 'react-i18next';
import languageDetector from 'i18next-browser-languagedetector';
import { en, ru } from './locales';
import { Lang } from './types';
import { LANGUAGES } from './languages';

const FALLBACK_LANGUAGE: Lang = 'en';

const resources = {
  en: {
    translation: en,
  },
  ru: {
    translation: ru,
  },
};

const initializeI18n = (): Ii18n => {
  const i18n = i18next.createInstance();
  i18n
    .use(languageDetector)
    .use(initReactI18next)
    .init({
      // enable if you want to debug i18n
      // debug: process.env.NODE_ENV === "development",
      debug: false,
      lng: 'en',
      resources,
      fallbackLng: FALLBACK_LANGUAGE,
      interpolation: {
        // React will escape output values, so we don't need
        // i18next to do it.
        escapeValue: false,
        format: (value, format, lng) => {
          const options = {};
          if (format === 'uppercase') {
            return value.toUpperCase();
          }
          if (value instanceof Date) return new Intl.DateTimeFormat(lng, options).format(value);
          return value;
        },
      },
      // Allows "en-US" and "en-UK" to be implcitly supported when "en"
      // is supported
      nonExplicitSupportedLngs: true,
      supportedLngs: Object.keys(LANGUAGES),
    });
  return i18n;
};

export { initializeI18n };
