import logo from './logo.svg';
import './App.css';
import LanguageSelector from './LanguageSelector';
import { useTranslation, Trans } from 'react-i18next';

function App() {
	const { t, i18n, ready } = useTranslation();

	const changeLanguage = (lan) => {
		i18n.changeLanguage(lan);
	};
	if (ready) {
		return (
			<div className='App'>
				<header className='App-header'>
					<LanguageSelector
						pCurrentLang={i18n.language}
						pOnChange={changeLanguage}
					/>
					<img src={logo} className='App-logo' alt='logo' />
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
				</header>
			</div>
		);
	}
	return <span>Loading...</span>;
}

export default App;
