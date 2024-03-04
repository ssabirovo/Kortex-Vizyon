import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import LanguageDetector from "i18next-browser-languagedetector";

import translationEN from "../../../public/locales/EN.json";
import translationUz from "../../../public/locales/UZ.json";
import translationTR from "../../../public/locales/TR.json";
import translationRU from "../../../public/locales/RU.json";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    lng: "en",
    fallbackLng: "en",
    resources: {
      en: {
        translation: translationEN,
      },
      uz: {
        translation: translationUz,
      },
      tr: {
        translation: translationTR,
      },
      ru: {
        translation: translationRU,
      },
    },
    detection: {
      order: ["localStorage", "htmlTag", "path", "subdomain"],
      caches: ["localStorage"],
    },
    debug: true,
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
