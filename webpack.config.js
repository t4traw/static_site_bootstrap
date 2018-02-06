const webpack = require('webpack');
module.exports = {
  entry: [
    './source/javascripts/site.js'
  ],
  output: {
    path: __dirname + '/.tmp/dist',
    filename: 'javascripts/bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.(sass|scss)$/,
        use: [
          "style-loader",
          "css-loader",
          "postcss-loader",
          "sass-loader"
        ]
      },
    ]
  }
};
