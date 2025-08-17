const path    = require("path")
const webpack = require("webpack")

module.exports = {
  mode: 'development', // or 'production'
  entry: './app/javascript/application.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'app/assets/builds'),
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/, // Apply this rule to .js and .jsx files
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-react'] // Use the React preset
          }
        }
      }
    ]
  }
};