const { merge } = require('webpack-merge')
const common = require('./webpack.config.js')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = merge(common, {
  module: {
    rules: [
      {
        test: /.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader'
        ]
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({ filename: 'webvtt-player.css' })
  ],
  externals: {
    react: {          
      commonjs: "react",          
      commonjs2: "react",          
      amd: "React",          
      root: "React"      
    },      
    "react-dom": {          
      commonjs: "react-dom",          
      commonjs2: "react-dom",          
      amd: "ReactDOM",          
      root: "ReactDOM"      
    },
    "react-media-player": {
      commonjs: "react-media-player",
      commonjs2: "react-media-player",
      amd: "ReactMediaPlayer",
      root: "ReactMediaPlayer"
    }
  }
})
