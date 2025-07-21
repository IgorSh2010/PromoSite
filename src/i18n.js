import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import translationEN from "./locales/en/translation.json";
import translationUA from "./locales/ua/translation.json";
import translationPL from "./locales/pl/translation.json";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: translationEN },
      ua: { translation: translationUA },
      pl: { translation: translationPL },
    },
    fallbackLng: "pl",
    interpolation: { escapeValue: false },
  });

export default i18n;

// import i18n from 'i18next';
// import { initReactI18next } from 'react-i18next';
// import LanguageDetector from 'i18next-browser-languagedetector';
// import HttpApi from 'i18next-http-backend';

// i18n
//   .use(HttpApi)
//   .use(LanguageDetector)
//   .use(initReactI18next)
//   .init({
//     supportedLngs: ['en', 'pl', 'ua'],
//     fallbackLng: 'en',
//     detection: {
//       order: ['querystring', 'cookie', 'localStorage', 'navigator'],
//       caches: ['cookie'],
//     },
//     backend: {
//       loadPath: '/locales/{{lng}}/translation.json',
//     },
//     react: {
//       useSuspense: false, // якщо не використовуєш Suspense
//     },
//   });

// export default i18n;
