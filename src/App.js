import logo from './logo.svg';
import './App.css';
import LanguageTranslator from './features/lang-translation/LanguageTranslation';

function App() {
	return (
		<div className='App'>
			<LanguageTranslator />
			<header className='App-header'>
				<img src={logo} className='App-logo' alt='logo' />
			</header>
		</div>
	);
}

export default App;
