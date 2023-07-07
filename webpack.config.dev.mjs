import path, { dirname } from "path";
// import HtmlWebpackPlugin from "html-webpack-plugin";
import svgToMiniDataURI from "mini-svg-data-uri";
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

/* //! THIS WILL CHANGE ALL FILES AND CACHE THRASH THE APP */
const PROJECT_BUILD_VERSION = "0.1.3";

export default {
  mode: "development",
  devtool: "eval-source-map", // ? Allows accurate debugging with source code in browser
  
  /* // * Entry Points for URLs */
  entry: { // * Code Splitting
    app: path.resolve(__dirname, "src/index.mjs"),
  },

  /* // * Output SIMULATED files */
  output: { // ? Transpiled Output File, Bundled JS
    path: path.resolve(__dirname, "dist"), // ? create a simulated file from webpack's mem to allow debugging
    /* filename: "[name].js", //? Use entry points [name] */
    filename: (pathData) => {
      if (pathData.chunk.name === "sw") {
        return "[name].js";
      }
      // ? Cache busting - only in prod
      return "[name].[contenthash:8].js"; 
    },
    chunkFilename: "[name].[contenthash:8].bundle.js",
    assetModuleFilename: "img/[hash].[ext]",
    publicPath: "/",
    hashSalt: PROJECT_BUILD_VERSION
  },

  /* // * Prevents hashing from changing without changes. 
        * Allows multiple entry points. */
  optimization: {
    moduleIds: "deterministic",
    // ? Single Entry Point
    runtimeChunk: "single",
    splitChunks : {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: "vendor",
          chunks: "all",
        }
      }
    }
  },

  /* plugins: [
    // ? Create HTML file that includes reference to bundled JS
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "public/index.html"),
      publicPath: "/",
      filename: "index.html",
    }),
  ], */

  module: {
    rules: [
      { test: /index\.html/, type: 'asset/resource', generator: { filename: 'index.html' } },
      { test: /\.m?js$/i, exclude: [/node_modules/], },
      { test: /\.css$/i, use: ["style-loader", "css-loader"], },
      { test: /\.s[ac]ss$/i, use: ["style-loader", "css-loader", "sass-loader"], },
      // { test: /\.(png|jpg|jpeg|gif)$/i, type: 'asset/resource' },
      { test: /\.(png|jpg|jpeg|gif)$/i, type: 'asset/inline', generator: { filename: 'static/[hash][ext][query]' } },
      { test: /\.(svg)$/i, type: 'asset/inline', generator: {
        dataUrl: content => {
          content = content.toString();
          return svgToMiniDataURI(content);
        }
      }},
      { test: /\.(woff|woff2|eot|ttf|otf)$/i, type: 'asset/resource' },
    ],
  },
};