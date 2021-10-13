const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  devtool: 'inline-source-map',
  entry:  {
    app : ['babel-polyfill', "./src/index"],
  },

  resolve: {
    extensions: [".js", ".jsx"]
  },

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: "babel-loader",
        exclude: /node_modules/
      },
      {
        test: /\.js$/,
        loader: "babel-loader",
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.scss$/,
        use : ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.(ttf|eot|svg|woff|woff2|png)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        use: [{
          loader: 'file-loader'
        }]
      }
    ]
  },

  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js"
  },

  plugins: [
    new HtmlWebpackPlugin({
      // index.html에 output에서 만들어진 bundle.js를 적용하여, dist에 새로운 html 파일 생성
      template: `./public/index.html`
    })
  ],

  devServer: {
    contentBase: path.join(__dirname, "dist"),
    compress: true,
    port: 3000,
    historyApiFallback: true,
    publicPath: '/',
  }
};