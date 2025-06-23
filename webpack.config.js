const path = require("path")
const ESLintPlugin = require('eslint-webpack-plugin')

module.exports = {
  entry: {
    'webvtt-player': path.resolve(__dirname, './src/index.js')
  },
  output: {
    filename: `[name].js`,
    path: path.resolve(__dirname, 'dist'),
    library: 'webvttPlayer',
    libraryTarget: 'umd',
    umdNamedDefine: true,
    globalObject: 'this'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: ["babel-loader"],
        exclude: /node_modules/
      }
    ]
  },
  plugins: [
    new ESLintPlugin()
  ],
  resolve: {
    modules: ['node_modules'],
    extensions: ['.js']
  }
}
