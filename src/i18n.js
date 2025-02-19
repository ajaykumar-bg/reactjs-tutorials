import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import common_en from './locales/en/common.json';
import common_es from './locales/es/common.json';

import sidemenu_en from './locales/en/sidemenu.json';
import sidemenu_es from './locales/es/sidemenu.json';

// Add more translations here

i18n
	.use(initReactI18next) // passes i18n down to react-i18next
	.init({
		// the translations
		// (tip move them in a JSON file and import them,
		// or even better, manage them via a UI: https://react.i18next.com/guides/multiple-translation-files#manage-your-translations-with-a-management-gui)
		resources: {
			en: {
				translation: common_en,

				// Add more here
			},
			es: {
				translation: common_es,
				// Add more here
			},
		},
		lng: 'en', // if you're using a language detector, do not define the lng option
		fallbackLng: 'en',

		interpolation: {
			escapeValue: false, // react already safes from xss => https://www.i18next.com/translation-function/interpolation#unescape
		},
	});
