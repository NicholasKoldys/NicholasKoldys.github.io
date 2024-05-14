// import { merge } from "webpack-merge";
import path from 'node:path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'css-minimizer-webpack-plugin';
import { EsbuildPlugin } from 'esbuild-loader';
import { commonConfig } from "./webpack.base.config.js";

process.env.NODE_ENV = 'production';

export default 
{
  ...commonConfig, 
  mode: "production",
  // devtool: "source-map", 

  entry: {
    main: path.resolve( "src/index.js" ),
    // vendor: path.resolve(__dirname, "src/vendor.js"),
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve("public/index.html"),
      publicPath: commonConfig.output.publicPath,
      filename: "index.html",
      scriptLoading: "defer",
      inject: true,
      //* minify options */
      minify: {
          removeComments: true,
          collapseWhitespace: true,
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
      // filename: '[name].[contenthash:8].css'
    }),
    new EsbuildPlugin({ }),
    /* new InjectManifest({
        injectionPoint: "self.__precacheManifest",
        swSrc: path.resolve(__dirname, "src/src-sw.js"),
        swDest: "sw.js"
    }) */
  ],
};