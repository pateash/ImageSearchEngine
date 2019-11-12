module.exports = {
  outputDir: 'dist',
  devServer: {
    proxy: {
      '/api/': {
        // target: 'https://itunes.apple.com',
        target: 'https://www.google.co.in',
        changeOrigin: true,
        pathRewrite: { '^/api/': '' }
      }
    }
  }
}
