// 引入 node 内置的 path 功能
const path = require("path");
// 引入 vue-loader 插件处理 vue 模板
const { VueLoaderPlugin } = require("vue-loader");

module.exports = {
  // 配置入口
  entry: "./src/main.js",
  // 配置出口
  output: {
    // 定义文件输出路径
    // __dirname：当前文件的绝对路径
    // path.resolve()：自动拼接处理路径方法
    path: path.resolve(__dirname + "/dist"),
    // 定义输出的文件名字叫什么
    filename: "bundle.js",
  },
  // 配置 loader
  module: {
    rules: [
      // 定义 Vue 文件的 loader
      {
        // 那些文件使用这个 loader
        test: /\.vue/,
        // 使用什么 loader 处理文件
        use: "vue-loader",
      },
      // 定义 css 文件的 loader
      {
        test: /\.css/,
        use: ["style-loader", "css-loader"],
      },
      // 定义 scss 文件的 loader
      {
        // 兼容旧版 scss/sass
        test: /\.s[ca]ss$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      // 定义 babel 如何转译 js 文件
      {
        // .mjs 是一种模块 js 文件
        test: /\.m?js%/,
        use: {
          // 使用 loader
          loader: "babel-loader",
          // loader 配置
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
      // 定义图片文件的处理，Webpack5 新写法
      {
        test: /\.(png | jpg | jpeg | gif | svg | webp | icon)$/,
        type: "asset",
      },
      // 定义处理 HTML 中的图片
      {
        test: /\.html$/,
        loader: "html-loader",
      },
      // 定义处理图片文件
      {
        test: /\.(png|svg|gif|jpe?g)$/,
        use: [
          {
            // 或者 url-loader
            loader: "file-loader",
            options: {
              // 设置打包后的图片名称和文件夹
              name: "img/[name].[hash:8][ext]",
              // 不转为 esModule
              esModule: false,
              // 当图片小于 limit 时，图片会被转为 base64
              limit: 3 * 1024,
            },
          },
        ],
      },
    ],
  },
  // 配置插件
  plugins: [
    // 使用 vue-loader 插件
    new VueLoaderPlugin(),
  ],
  // dev-server 配置
  devServer: {
    // 打包后的静态文件夹
    static: "./dist",
    // 运行后自动打开浏览器进入项目
    open: true,
    // 设置自动打开的地址为公共地址（设置此项后本地地址不会再开启）
    // host: 'local-ip',
    // 指定打开的端口号
    port: 3068,
    // 运行项目后进行提示
    onListening: function ({ server }) {
      const { address, port } = server.address();
      console.log(
        "项目已成功运行！：",
        address == "::" ? "http://localhost:3068" : `http://${address}:${port}`
      );
      console.log(
        "当前项目运行地址为：",
        address == "::" ? "localhost" : address
      );
      console.log("当前项目使用端口为：", port);
    },
    // 开启热模块替换
    hot: true,
    // 跨域配置
    proxy: {
      "/api": {
        target: " http://localhost:1744",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ""),
      },
    },
  },
  // 配置开发工具 devtool
  devtool: "inline-source-map",
};
