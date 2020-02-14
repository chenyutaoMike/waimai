module.exports = {
  devServer: {
    host: "localhost",
    proxy: {
      "/api": {
        target: "http://localhost:4000",
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''  //这里用 '/api'代替target里面的地址
        }
      }
    }
  },

  lintOnSave: false
}