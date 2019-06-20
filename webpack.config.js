const path = require('path')
const glob = require('glob')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const PurgecssPlugin = require('purgecss-webpack-plugin')

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
          MiniCssExtractPlugin.loader,
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
                require('cssnano')({
                  preset: 'default',
                }),

              ]
            },
          },
          'sass-loader',
        ]
      },
      {
        test: /\.(js|sass|scss)$/,
        enforce: "pre",
        loader: 'import-glob-loader'
      },
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "[name].css",
    }),
    new PurgecssPlugin({
      paths: glob.sync(`${path.join(__dirname, 'source')}/**/*`, { nodir: true }),
    }),
  ]
}
