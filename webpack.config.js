const HtmlWebpackPlugin = require('html-webpack-plugin')
const FaviconsWebpackPlugin = require('favicons-webpack-plugin')
const path = require('path')

module.exports = {
  mode: 'production',
  output: {
    filename: 'app.bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  plugins: [
    new FaviconsWebpackPlugin({
      logo: './src/assets/img/DS.png',
      inject: true
    }),
    new HtmlWebpackPlugin({ template: 'src/index.html', favicon: './src/assets/img/DS.png' })
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      },
      {
        test: /\.(png|svg|jpg|ico)$/,
        use: {
          loader: 'file-loader',
          options: {
            outputPath: 'assets/img/'
          }
        }
      }
    ]
  }
}
