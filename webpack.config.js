const path = require('path');
const webpack = require('webpack');
const htmlWebpackPlugin = require('html-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');


module.exports = {
  entry: path.join(__dirname, './src/main.js'),
  output: {
    path: path.join(__dirname, './dist'),
    filename: 'bundle.js'
  },
  // devServer: {
  //   open:true,
  //   port:3000,
  //   contentBase:'src',
  //   hot:true
  // },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new htmlWebpackPlugin({
      template: path.join(__dirname, './src/index.html'),
      filename: 'index.html'
    }),
    new VueLoaderPlugin()

  ],

  module: {
    rules: [
      { test: /\.css$/, use: ['style-loader', 'css-loader'] },
      { test: /\.less$/, use: ['style-loader', 'css-loader', 'less-loader'] },
      { test: /\.scss$/, use: ['style-loader', 'css-loader', 'sass-loader'] },
      { test: /\.(jpg|png|gif|bmp|jpeg)$/, use: 'url-loader' },
      { test: /\.(ttf|eot|svg|woff|woff2)$/, use: 'url-loader' },
      { test: /\.js$/, use: 'babel-loader', exclude: /node_modules/ },//配置js高级语法解析loader.
      { test: /\.vue$/, use: 'vue-loader' }//處理.vue文件
    ]
  },

  resolve: {
    alias: {
      //修改 Vue 被导入时候的包的路径
      "vue$": "vue/dist/vue.js"
    }
  }
}