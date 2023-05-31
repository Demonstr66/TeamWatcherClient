module.exports = {
    devServer: {
        proxy: {
            '/api': {
                target: 'http://141.8.198.215:3000/',
                ws: true,
                changeOrigin: true
            }
        }
    }
}