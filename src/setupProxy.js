const createProxyMiddleware = require('http-proxy-middleware');

// const schema = process.env.REACT_APP_BACKEND_SCHEMA;
// const host = process.env.REACT_APP_BACKEND_HOST;

// const path = `${schema}://${host}`;
const path = 'https://rickandmortyapi.com';

console.log(path);

module.exports = function (app) {
	app.use(
		'/graphql',
		createProxyMiddleware({
			target: path,
			changeOrigin: true,
		}),
	);
	app.use(
		'/api',
		createProxyMiddleware({
			target: path,
			changeOrigin: true,
		}),
	);
};
