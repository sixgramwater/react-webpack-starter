const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  // entry: {
  //   index: path.resolve(__dirname, "source", "index.js")
  // },
  // output: {
  //   path: path.resolve(__dirname, "build")
  // }
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "src", "index.html")
    })
  ],
  module: {
    rules: [
      // 使用test匹配文件类型， use数组决定使用哪些loader
      // {
      //   test: /\.filename$/,
      //   use: ["loader-b", "loader-a"]
      // }
      {
        test: /\.js$/,
        use: ["babel-loader"]
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"]
      }
    ]
  }
}