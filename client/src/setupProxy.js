const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  const isDevelopment = process.env.NODE_ENV === 'development';
  const target = isDevelopment
    ? 'http://localhost:5000'
    : 'https://maxfindscars.onrender.com';

  app.use(
    ['/api'],
    createProxyMiddleware({
      target,
      changeOrigin: true,
      // pathRewrite: {
      //   '^/api': '',
      // },
    })
  );    
};
