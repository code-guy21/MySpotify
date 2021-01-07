import React from 'react';
import API from './utils/API';

const App = () => {
	return (
		<div>
			<button onClick={API.login}>login to spotify</button>
		</div>
	);
};

export default App;
