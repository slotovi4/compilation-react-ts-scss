import axios from 'axios';

const axiosBase = axios.create({
	baseURL: process.env.REACT_APP_BASE_DOMAIN,
	headers: {
		// eslint-disable-next-line @typescript-eslint/naming-convention
		'Content-type': 'application/json',
	},
	timeout: 1000 * 10
});

export default axiosBase;
