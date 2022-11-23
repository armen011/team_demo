import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import ArmenianTranslations from "translations/hy.json";
import EnglishTranslations from "translations/en.json";

const resources = {
  en: {
    translation: EnglishTranslations,
  },
  hy: {
    translation: ArmenianTranslations,
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
