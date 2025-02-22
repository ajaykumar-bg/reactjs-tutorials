import React from 'react';

function LanguageSelector(props) {
	const { pCurrentLang, pOnChange } = props;
	return (
		<div>
			<select value={pCurrentLang} onChange={(e) => pOnChange(e.target.value)}>
				<option value='en'>English</option>
				<option value='es'>Spanish</option>
			</select>
		</div>
	);
}

export default LanguageSelector;
