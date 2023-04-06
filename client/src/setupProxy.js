const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  const isDevelopment = process.env.NODE_ENV === 'development';
  const target = isDevelopment
    ? 'http://localhost:5000'
    : 'https://maxfindscars.onrender.com';

  app.use(
    '/posts',
    createProxyMiddleware({
      target,
      changeOrigin: true,
      pathRewrite: {
        '^/posts': '/api/posts',
      },
    })
  );
};
