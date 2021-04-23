const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

// const typingsForCssModulesLoaderConf = {
//   loader: 'typings-for-css-modules-loader',
//   options: {
//       modules: true,
//       namedExport: true,
//       camelCase: true,
//       sass: true
//   }
// }

module.exports = {
  mode: "development",
  entry: {
    index: path.resolve(__dirname, "src", "index.tsx")
  },
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "[name].bundle.js"
  },
  devtool: "eval-cheap-module-source-map",
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "src", "index.html")
    })
  ],
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx"]
  },
  module: {
    rules: [
      // 使用test匹配文件类型， use数组决定使用哪些loader
      // {
      //   test: /\.filename$/,
      //   use: ["loader-b", "loader-a"]
      // }
      {
        test: /\.tsx?$/,
        use: ["ts-loader"]
      },
      {
        test: /\.js$/,
        use: ["babel-loader"]
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.scss$/i,
        use: [
          "style-loader", 
          {
            loader: "css-loader",
            options: {
              modules: true,
              // importLoaders: 1,
              // modules: true,
              localIdentName: '[local]_[hash:base64:8]'
            }
          },
          "sass-loader",
          // typingsForCssModulesLoaderConf,
          {
            loader: "sass-resources-loader",
            options: {
              resources: [path.resolve(__dirname, "src/styles/variables.scss")]
            }
          }
        ],
        // 只有名字为a.module.scss的才会开启css module选项
        include: /\.module\.scss$/,
      },
      {
        test: /\.scss$/i,
        use: [
          "style-loader",
          "css-loader", 
          "sass-loader",
          // sass-resources-loader: 将variables.scss里的内容注入为全局变量
          // 就不需要再每个使用到变量的scss文件中再引入了
          {
            loader: "sass-resources-loader",
            options: {
              resources: [path.resolve(__dirname, "src/styles/variables.scss")]
            }
          }
        ],
        exclude: /\.module\.scss$/,
      }
    ]
  }
}