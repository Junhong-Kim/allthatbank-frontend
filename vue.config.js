const path = require('path')

module.exports = {
  devServer: {
    proxy: {
      '': {
        target: 'http://127.0.0.1:8000',
        changeOrigin: true
      }
    }
  },
  publicPath: process.env.NODE_ENV === 'production' ? '/static/' : '/',
  outputDir: path.resolve(__dirname, '../backend/static')
}
