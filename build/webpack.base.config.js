import path from "node:path";
import "html-loader";
import { EsbuildPlugin } from "esbuild-loader";
import "autoprefixer";
import "postcss-preset-env";

/* //! THIS WILL CHANGE ALL FILES AND CACHE THRASH THE APP */
const PROJECT_BUILD_VERSION = "0.0.1";

const __dirname = import.meta.dirname;

const PUBLIC_PATH = "/";

export const commonConfig = {
  entry: {
    devapp: path.resolve("./src/index.js"),
  },

  output: {
    path: path.resolve("./dist"),
    filename: (pathData) => {
      if (pathData.chunk.name === "sw") {
        return "[name].js";
      }
      return "[name].[contenthash:5].js";
    },
    chunkFilename: "[name].[contenthash:5].bundle.js",
    assetModuleFilename: "assets/[name].[contenthash:5][ext][query]",
    publicPath: PUBLIC_PATH,
    hashSalt: PROJECT_BUILD_VERSION,
    clean: true,
  },

  /* // * Prevents hashing from changing without changes.
   * Allows multiple entry points. */
  optimization: {
    moduleIds: "deterministic",
    // ? Single Entry Point
    runtimeChunk: "single",
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: "vendor",
          chunks: "all",
        },
      },
    },
    minimize: true,
    minimizer: [
      '...',
      new EsbuildPlugin({
        target: 'esnext',
        css: true
      })
    ],
  },

  plugins: [],

  module: {
    rules: [
      {
        test: /\.m?[j|t]sx?$/i,
        exclude: /(node_modules)/,
        use: [ {
          loader: "esbuild-loader",
          options: {
            loader: 'jsx',
            target: 'esnext'
          }
        } ],
      },
      {
        test: /\.(svg)$/i,
        exclude: /(fav)\.(svg)$/i,
        type: "asset/source",
      },
      {
        test: /(fav)\.(svg)$/i,
        type: "asset/resource",
      },
      {
        test: /\.(ico)$/i,
        type: "asset/resource",
      },
      {
        test: /\.(png|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: "asset/resource",
      },
      { test: /.html$/i, use: ["html-loader"] },
    ],
  },
};