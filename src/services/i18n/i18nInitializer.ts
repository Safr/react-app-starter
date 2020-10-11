/* eslint-disable @typescript-eslint/no-unused-vars */
import i18next, { i18n as Ii18n } from 'i18next';
import { initReactI18next } from 'react-i18next';
import languageDetector from 'i18next-browser-languagedetector';
import { en, ru } from './locales';
import { Lang } from './types';

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
      debug: false,
      lng: 'en',
      resources,
      fallbackLng: FALLBACK_LANGUAGE,
      interpolation: {
        format: (value, format) => {
          if (format === 'uppercase') {
            return value.toUpperCase();
          }
          return value;
        },
      },
    });
  return i18n;
};

export { initializeI18n };
