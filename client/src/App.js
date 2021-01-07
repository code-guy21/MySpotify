import React from 'react';
import API from './utils/API';

const App = () => {
	return (
		<div>
			<button onClick={API.login}>login to spotify</button>
			<button
				onClick={() => API.currentUser().then(res => console.log(res.data))}>
				Current User
			</button>
			<button onClick={API.logout}>Logout</button>
		</div>
	);
};

export default App;
