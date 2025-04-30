const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = (env, argv) => {
  const isDevelopment = argv.mode === 'development';

  return {
    entry: './src/script.js',
    output: {
      filename: isDevelopment ? '[name].js' : '[name].[contenthash].js',
      path: path.resolve(__dirname, 'dist')
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader"
          }
        },
        {
            test: /\.scss$/,
            exclude: /node_modules/,
            use: ["style-loader", "css-loader", 'sass-loader']
          }
      ],
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: "./src/index.html"
      })
    ],
    optimization: {
        splitChunks: {
          chunks: 'all',
        },
      }
  }
  
}