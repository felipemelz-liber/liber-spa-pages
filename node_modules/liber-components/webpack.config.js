const Path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const Webpack = require('webpack');
let Dotenv = require('dotenv');

module.exports = (env) => {
  Dotenv = Dotenv.config({ path: Path.join(__dirname, `/.env.${Object.keys(env)[0]}`) }).parsed;

  const common = {
    mode: process.env.NODE_ENV,
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          include: Path.resolve(__dirname, 'src'),
          exclude: /(node_modules | build | bundle)/,
          use: ['babel-loader'],
        },
        {
          test: /\.css$/i,
          use: ['style-loader', 'css-loader'],
        },
      ],
    },
    plugins: [
      new Webpack.DefinePlugin({
        'process.env': JSON.stringify(Dotenv),
      }),
    ],
    resolve: {
      modules: [Path.resolve('src'), Path.resolve('node_modules')],
      extensions: ['.js', '.jsx'],
    },
  };

  if (process.env.NODE_ENV === 'production') {
    return {
      ...common,
      entry: './src/index.js',
      output: {
        path: Path.resolve(__dirname, 'bundle'),
        filename: 'index.js',
        library: 'liber-components',
        libraryTarget: 'commonjs2',
      },
      optimization: {
        minimize: true,
      },
      target: 'node',
      externals: ['react', 'styled-components'],
    };
  }

  return {
    ...common,
    entry: './src/index.dev.jsx',
    output: {
      path: Path.resolve(__dirname, 'dev'),
      filename: 'index.js',
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: Path.resolve(__dirname, 'src/index.dev.html'),
        filename: 'index.html',
        inject: 'body',
      }),
    ],
    devtool: 'inline-source-map',
    devServer: {
      compress: true,
      contentBase: Path.resolve(__dirname, 'dev'),
      port: process.env.SERVER_PORT,
      stats: 'minimal',
    },
  };
};
