// build/webpack.common.js
const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const config = require('./config');
module.exports = {
  mode: 'production',
  entry: './src/index.js',
  output: {
    path: path.resolve(process.cwd(), './lib'),
    filename: 'fosun-his.common.js',
    libraryTarget: 'commonjs2', // 将库的返回值分配给module.exports
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
            preserveWhitespace: false // 打包后清除多余的空格
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
