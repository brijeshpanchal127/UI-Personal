var path = require('path');
const webpack = require('webpack');
const DIST_PATH = '/dist';
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const dotenv = require('dotenv-webpack');
/*
const dotenv = require('dotenv').config( {
  path: path.join(__dirname, '.env')
});
*/

module.exports = {
  entry: {
    main: path.resolve(__dirname, './src/index.js'),
  },
  performance: {
    hints: false,
    maxEntrypointSize: 512000,
    maxAssetSize: 512000
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: '[name].bundle.js',
    sourceMapFilename: '[name].map',
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, './public/index.html')
    }),
    new CleanWebpackPlugin(),
    new dotenv({
      allowEmptyValues: true,
    }),
    /*
    new webpack.DefinePlugin( {
      "process.env": dotenv.parsed
    } ),
    */
    /*
    new webpack.EnvironmentPlugin({
      NODE_ENV: 'development', // use 'development' unless process.env.NODE_ENV is defined
      APP_BASE_URL: '',
      API_URL:'',
    })
    */
//    new webpack.HotModuleReplacementPlugin()
  ],

  devServer: {
    port: 3000,
    historyApiFallback: true,
    contentBase: path.resolve(__dirname, DIST_PATH),
    open: true,
    hot: true,
  },

  module: {
    rules: [
      { 
        test: /\.css$/, 
       use: ['style-loader', 'css-loader'], 
      },
      { 
       test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
       type: 'asset/resource',
      },
      {
        test: /\.js|.jsx?$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-env',
              '@babel/preset-react', 
              {
                'plugins': ['@babel/plugin-proposal-class-properties']
              }
            ]
          }
        } 
      }
    ]
  },
}
