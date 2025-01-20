import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import en from './locales/en.json';
import he from './locales/he.json';

i18n
  .use(initReactI18next) // חיבור ל-react-i18next
  .init({
    resources: {
      en: {
        translation: en,
      },
      he: {
        translation: he,
      },
    },
    lng: 'en', // שפה ברירת מחדל
    fallbackLng: 'en', // שפה חלופית אם משהו לא מוגדר
    interpolation: {
      escapeValue: false, // React מטפל כבר בהגנה מפני XSS
    },
  });

export default i18n;