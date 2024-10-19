import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import esTranslation from '../locales/es-419.json'
import ptBrTranslation from '../locales/pt-Br.json'

const resources = {
  es: { translation: esTranslation },
  pt: { translation: ptBrTranslation }
}

i18next
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    debug: true,
    lng: 'pt',
    fallbackLng: 'pt',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18next;