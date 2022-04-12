import axios from 'axios';

export const config = {
	withCredentials: true,
	headers: {
		'Content-Type': 'application/json',
	},
};

export const axiosApi = axios.create({
	baseURL: '/api/',
	...config,
});
