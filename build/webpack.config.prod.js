import path from 'node:path';
import HtmlWebpackPlugin from 'html-webpack-plugin';

const PUBLIC_PATH = "/";
const NAME = "NicholasKoldys.dev";

export default {
  // ? Creates output files
  mode: "production",
  // ? Allows accurate debugging with source code in browser
  devtool: "source-map", 

  entry: {
    main: path.resolve( "src/index.js" ),
    // vendor: path.resolve(__dirname, "src/vendor.js"),
  },

  plugins: [
    // ? Create HTML file that includes reference to bundled JS
    new HtmlWebpackPlugin({
      title: NAME,
      template: path.resolve("public/index.html"),
      publicPath: PUBLIC_PATH,
      filename: "index.html",
      scriptLoading: "defer",
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        useShortDoctype: true,
        removeEmptyAttributes: true,
        removeStyleLinkTypeAttributes: true,
        keepClosingSlash: true,
        minifyJS: true,
        minifyCSS: true,
        minifyURLs: true,
      },
      inject: true,
      // using html Webpack Plugin.options.varName
      // trackJSToken: "INSERT YOUR TOKEN HERE",
    }),

    // new InjectManifest({
    //     injectionPoint: "self.__precacheManifest",
    //     swSrc: path.resolve(__dirname, "src/src-sw.js"),
    //     swDest: "sw.js"
    // })
  ],
};