import React from 'react';

import LanguageSelector from './LanguageSelector';
import { useTranslation, Trans } from 'react-i18next';

function LanguageTranslator() {
	const { t, i18n, ready } = useTranslation();

	const changeLanguage = (lan) => {
		i18n.changeLanguage(lan);
	};
	if (ready) {
		return (
			<div>
				<LanguageSelector
					pCurrentLang={i18n.language}
					pOnChange={changeLanguage}
				/>
				<p>{t('welcomeMessage')}</p>
				<a
					className='App-link'
					href='https://reactjs.org'
					target='_blank'
					rel='noopener noreferrer'
				>
					{t('subtitle')}
				</a>
				<p>
					<Trans i18nKey='settings'></Trans>
				</p>
				<p>
					<Trans i18nKey='profile'></Trans>
				</p>
			</div>
		);
	}
	return <span>Loading...</span>;
}

export default LanguageTranslator;
