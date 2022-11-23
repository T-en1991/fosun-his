// webpack.components.js
const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const Components = require('../components.json'); // 引入组件的配置文件
const config = require('./config');
const webpackConfig = {
  mode: 'production',
  entry: Components, // {'button': './packages/button/index.js'}
  output: {
    path: path.resolve(process.cwd(), './lib'),
    filename: '[name].js', // 组件名
    libraryTarget: 'commonjs2'
  },
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: config.alias,
    modules: ['node_modules']
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          compilerOptions: {
            preserveWhitespace: false
          }
        }
      },
      {
        test: /\.js|jsx$/, use: 'babel-loader',
        exclude: /node_modules/
      }
    ]
  },
  plugins: [
    new VueLoaderPlugin()
  ]
};

module.exports = webpackConfig;
