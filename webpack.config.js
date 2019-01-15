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
        test: /\.(css|sass|scss)$/,
        use: [
          "style-loader",
          "css-loader",
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: true,
              plugins: [
                require('autoprefixer')({
                  grid: true
                }),
                require('csswring')(),
              ]
            },
          },
          "sass-loader"
        ]
      },
    ]
  }
};
