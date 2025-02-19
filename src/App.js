import logo from './logo.svg';
import './App.css';
import LanguageSelector from './LanguageSelector';
import { useTranslation } from 'react-i18next';
import './i18n';

function App() {
	const { t, i18n, ready } = useTranslation();

	const changeLanguage = (lan) => {
		i18n.changeLanguage(lan);
	};
	if (ready) {
		return (
			<div className='App'>
				<header className='App-header'>
					<LanguageSelector pOnChange={changeLanguage} />
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
					<p>{t('profile')}</p>
					<p>{t('settings')}</p>
				</header>
			</div>
		);
	}
	return <span>Loading...</span>;
}

export default App;
