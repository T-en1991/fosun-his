const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const config = require('./config');

const isProd = process.env.NODE_ENV === 'production';
const isPlay = !!process.env.PLAY_ENV;

module.exports = {
  mode: 'development',
  entry: './examples/entry.js',
  output: {
    path: path.resolve(process.cwd(), './examples/fosun-his/'),
    publicPath: '',
    filename: '[name].[hash:7].js',
    chunkFilename: '[name].js'
  },
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: config.alias,
    modules: ['node_modules']
  },
  // 启动一个服务
  devServer: {
    host: '0.0.0.0',
    port: 8082,
    disableHostCheck:true,
    useLocalIp: true,
    publicPath: '/',
    hot: true,
    stats: 'minimal',
    https:true,
  },
  module: {
    rules: [
      // 处理 .vue 文件
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          compilerOptions: {
            preserveWhitespace: false
          }
        }
      },
      // 处理 scss
      {
        test: /\.(scss|css)$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.(jsx?|babel|es6)$/,
        include: process.cwd(),
        exclude: config.jsexclude,
        loader: 'babel-loader'
      },
      {
        test: /\.md$/,
        use: [
          // 处理 .vue  文件
          {
            loader: 'vue-loader',
            options: {
              compilerOptions: {
                preserveWhitespace: false
              }
            }
          },
          // 自定义一个 loader, 通过 loader 先把 .md 文件转成 .vue 文件形式
          {
            loader: path.resolve(__dirname, './md-loader/index.js')
          }
        ]
      },
      {
        test: /\.(svg|otf|ttf|woff2?|eot|gif|png|jpe?g)(\?\S*)?$/,
        loader: 'url-loader',
        // todo: 这种写法有待调整
        query: {
          limit: 10000,
          name: path.posix.join('static', '[name].[hash:7].[ext]')
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './examples/index.tpl',
      filename: './index.html',
    }),
    new VueLoaderPlugin(), // vue-loader的15版本之后, 都要求伴生使用 Plugin ：https://vue-loader.vuejs.org/migrating.html#a-plugin-is-now-required
  ]
}
