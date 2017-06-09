var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  resolve: {
    root: path.resolve('./src'),
    modulesDirectories: ['node_modules', 'src'],
    alias: {
      'soft-key-store': path.resolve('./node_modules/soft-key-store'),
      'base-component': path.resolve('./node_modules/base-component'),
      'base-emitter': path.resolve('./node_modules/base-emitter'),
      'service': path.resolve('./node_modules/service')
    }
  },
  entry: {
    app: './src/app.js',
    vendors: ['react']
  },
  output: {
    path: path.resolve('./dist'),
    filename: 'bundle.js',
    publicPath: 'dist/'
  },
  module: {
    loaders: [
      {
        test: /.jsx?$/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015', 'stage-0']
        }
      },
      {
        test: /\.(scss|css)$/,
        loader: ExtractTextPlugin.extract('style', 'css!sass', { publicPath: './' })
      },
      {
        test: /\.less$/, loader: 'style-loader!css-loader!less-loader'
      },
      {
        test: /\.(ttf|eot|png|svg|woff(2)?)(\?[a-z0-9]+)?$/,
        loader: 'file-loader?name=[name]-[hash:6].[ext]'
      },
      {
        test: /\.properties$/,
        loader: 'file-loader?name=[name].[ext]'
      }
    ]
  },
  plugins: [
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new ExtractTextPlugin('style.css'),
    new webpack.optimize.CommonsChunkPlugin('vendors', 'vendors.js', Infinity)
  ]
};
