const path = require('path')
const glob = require('glob')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const builderConfig = {
  mode: 'development',
  entry: glob.sync('./src/pages/**/*.js').reduce((acc, path) => {
    const entry = path.replace('./src/pages/', '').replace('.js', '')
    acc[entry] = path
    return acc
  }, {}),
  output: {
    filename: 'pages/[name].js',
    path: path.resolve(__dirname, 'dist'),
    libraryTarget: 'commonjs',
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'files/styles.css',
    }),
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          { loader: 'babel-loader' },
          {
            loader: 'linaria/loader',
            options: { sourceMap: false },
          },
        ],
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: { hmr: false },
          },
          {
            loader: 'css-loader',
            options: { sourceMap: false },
          },
        ],
      },
    ],
  },
}

const browserConfig = {
  mode: 'production',
  entry: './src/browser.js',
  output: {
    library: 'libs',
    libraryTarget: 'umd',
    filename: 'libs.js',
    path: path.resolve(__dirname, 'dist', 'files'),
  },
}

module.exports = [builderConfig, browserConfig]
