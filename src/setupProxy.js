const { createProxyMiddleware } = require("http-proxy-middleware"); //注意写法，这是1.0以后的版本，最好按抄

module.exports = function (app) {
  app.use(
    createProxyMiddleware("/devApi", {
      target: "http://www.web-jshtml.cn/api/react", // 配置你要请求的服务器的地址
      pathRewrite: {
        "^/devApi": "", 
      },
      changeOrigin: true,
      secure: false, // 是否验证证书
      ws: false, // 启用websocket
    })
  );
};
