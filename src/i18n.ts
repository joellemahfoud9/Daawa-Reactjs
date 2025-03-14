import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import HttpApi from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(HttpApi) 
  .use(LanguageDetector)
  .use(initReactI18next) 
  .init({
    supportedLngs: ['en', 'ar'], 
    fallbackLng: 'en',
    detection: {
        order: ['queryString', 'cookie', 'localStorage', 'navigator', 'htmlTag'],
        caches: ['cookie']
      },
    backend: {
        loadPath: '/locales/{{lng}}.json'
      },
    interpolation: {
      escapeValue: false
    }
  });

i18n.on('languageChanged', (lng) => {
  if (lng === 'ar') {
    document.documentElement.dir = 'rtl';
    document.documentElement.lang = 'ar';
  } else {
    document.documentElement.dir = 'ltr';
    document.documentElement.lang = 'en';
  }
});

export default i18n;
