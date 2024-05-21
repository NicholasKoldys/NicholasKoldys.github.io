import path from 'node:path';
import { commonConfig } from './webpack.base.config.js';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import CompressionPlugin from "compression-webpack-plugin";

process.env.NODE_ENV = 'production';

export default 
{
  ...commonConfig, 
  mode: 'production',

  entry: {
    main: path.resolve( './src/index.js' ),
    vendor: path.resolve( './src/vendor.js' ),
  },

  plugins: [
    ...commonConfig.plugins, 
    new HtmlWebpackPlugin({
      template: path.resolve('./src/template.html'),
      publicPath: commonConfig.output.publicPath,
      filename: 'index.html',
      scriptLoading: 'defer',
      inject: true,
      minify: {
          removeComments: true,
          collapseWhitespace: true,
          removeAttributeQuotes: true,
          keepClosingSlash: true,
          removeRedundantAttributes: true,
          removeScriptTypeAttributes: true,
          removeStyleLinkTypeAttributes: true,
          useShortDoctype: true,
          removeEmptyAttributes: true,
          minifyJS: true,
          minifyCSS: true,
          minifyURLs: true,
      },
    }),
    new MiniCssExtractPlugin({ 
      filename: '[name].[contenthash:5].css'
    }),
    new CompressionPlugin({
      test: /\.js(\?.*)?$/i,
    }),
  ],

  module: {
    rules: [
      ...commonConfig.module.rules,
      { test: /\.(sc|sa|c)ss$/i, exclude: /\.module\.(sc|sa|c)ss$/, 
          use: [
            MiniCssExtractPlugin.loader, 
            'css-loader',
            { loader: 'postcss-loader', options: { postcssOptions: {
                plugins: [ 'autoprefixer', 'postcss-preset-env',  ]
            } } }, 
          ],
          sideEffects: true,
      },
      { test: /\.module\.(sc|sa|c)ss$/i,
          use: [
            MiniCssExtractPlugin.loader,
            { loader: 'css-loader', 
              options: { 
                modules: 'local',
                modules: {
                  mode: 'local',
                  auto: true,
                  namedExport: true, 
                  localIdentName: '[name]__[local]--[contenthash:base64:5]',
                  exportLocalsConvention: 'camelCaseOnly',
                },
                importLoaders: 1,
            } },
            { loader: 'postcss-loader', options: { postcssOptions: {
              plugins: [ 'autoprefixer', 'postcss-preset-env',  ]
            } } }, 
          ],
      },
    ]
  }
};