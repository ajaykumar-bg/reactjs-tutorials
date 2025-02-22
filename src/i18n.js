import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import en from './locales/en.json';
import es from './locales/es.json';

i18n
	.use(initReactI18next) // passes i18n down to react-i18next
	.init({
		resources: {
			en: { translation: en },
			es: { translation: es },
		},
		lng: 'en', // Language to use (overrides language detection)
		fallbackLng: 'en', // Language to use if translations in user language are not available.
		interpolation: {
			escapeValue: false, // react already safes from xss => https://www.i18next.com/translation-function/interpolation#unescape
		},
	});

export default i18n;
