module.exports = {
    devServer: {
        proxy: {
            '^/api': {
                target: 'http://backend:3000/',
                ws: true,
                changeOrigin: true
            }
        }
    }
}