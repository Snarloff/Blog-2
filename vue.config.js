const path = require('path');
const PrerenderSPAPlugin = require('prerender-spa-plugin');

module.exports = {
  configureWebpack: {
    resolve: { mainFields: ['main', 'module'] },
    plugins: [
      new PrerenderSPAPlugin({
        headless: true,
        staticDir: path.join(__dirname, 'dist'),
        routes:[ '/', '/blog/home', '/blog/article', '/:catchAll(.*)' ],captureAfterTime: 5000,
        indexPath: path.resolve('dist/index.html')
      }),
    ],
  }, 
};  