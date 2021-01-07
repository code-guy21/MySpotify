import axios from 'axios';

export default {
	login: () => window.location.replace('/api/auth/login'),
	logout: () => axios.get('/api/auth/logout'),
	currentUser: () => axios.get('/api/auth/user'),
};
