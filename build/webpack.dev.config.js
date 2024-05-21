import path from 'node:path';
import { commonConfig } from "./webpack.base.config.js";
import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import 'style-loader';

process.env.NODE_ENV = 'development'

export default
{ 
    ...commonConfig, 
    mode: "development",
    devtool: "eval-source-map", // ? Allows accurate debugging with source code in browser
    

    entry: {
        main: path.resolve("./src/index.js"),
    },

    plugins: [
      ...commonConfig.plugins, 
      new HtmlWebpackPlugin({
        template: path.resolve('./src/template.html'),
        publicPath: commonConfig.output.publicPath,
        filename: 'index.html',
        scriptLoading: 'defer',
        inject: true,
      }),
      new MiniCssExtractPlugin({ 
        filename: '[name].css'
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
                    modules: "local",
                    modules: {
                      mode: "local",
                      auto: true,
                      namedExport: true,
                      localIdentName: "[name]__[local]--[hash:4]",
                      exportLocalsConvention: "camelCaseOnly",
                    },
                    importLoaders: 1, 
                } },
                { loader: 'postcss-loader', 
                  options: { postcssOptions: {
                    plugins: [ 'autoprefixer', 'postcss-preset-env',  ]
                } } }, 
              ],
          },
        ]
    }
};