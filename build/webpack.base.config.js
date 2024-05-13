import path from 'node:path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'css-minimizer-webpack-plugin';
import { EsbuildPlugin } from 'esbuild-loader';
// import svgToMiniDataURI from "mini-svg-data-uri";
// import ImageMinimizerPlugin from "image-minimizer-webpack-plugin";
// import { InjectManifest } from "workbox-webpack-plugin";
/* //! THIS WILL CHANGE ALL FILES AND CACHE THRASH THE APP */
const PROJECT_BUILD_VERSION = "0.0.1";

const __dirname = import.meta.dirname;

const PUBLIC_PATH = "/";
const NAME = "NicholasKoldys.dev";

export const commonConfig = {

    target: ['web', 'es6'],
    
    entry: {
        app: path.resolve("src/index.js"),
    },

    output: {
        path: path.resolve('./dist'),
        filename: (pathData) => {
            if (pathData.chunk.name === "sw") {
                return "[name].js";
            }
            return "[name].[contenthash:8].js"; 
        },
        chunkFilename: "[name].[contenthash:8].bundle.js", 
        assetModuleFilename: "assets/[name].[contenthash:8][ext][query]", 
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
        splitChunks : {
            cacheGroups: {
                vendor: {
                test: /[\\/]node_modules[\\/]/,
                name: "vendor",
                chunks: "all",
                }
            }
        },
        minimize: true,
        minimizer: [
            "...",
            // new ImageMinimizerPlugin({
            //     minimizer: {
            //         implementation: ImageMinimizerPlugin.imageminMinify,
            //         options: {
            //             plugins: [
            //                 ["gifsicle", { interlaced: true }],
            //                 ["jpegtran", { progressive: true }],
            //                 ["optipng", { optimizationLevel: 5 }],
            //             ],
            //         },
            //     },
            //     loader: false
            // }),
        ],
    },

    plugins: [
        new HtmlWebpackPlugin({
            title: NAME,
            template: path.resolve("public/index.html"),
            publicPath: PUBLIC_PATH,
            filename: "index.html",
            scriptLoading: "defer",
            //   js: {
            //     // output filename of compiled JavaScript
            //     filename: 'js/[name].[contenthash:8].js',
            //   },
            //   css: {
            //     // output filename of extracted CSS
            //     filename: 'css/[name].[contenthash:8].css',
            //   },
            inject: true,
            // using html Webpack Plugin.options.varName
            // trackJSToken: "INSERT YOUR TOKEN HERE",
        }),
        new MiniCssExtractPlugin({ 
            // filename: "[name].[contenthash:8].css"
        }),
        new EsbuildPlugin({ }),
        
    ],

    module: {
        rules: [ 
            { test: /\.m?[j|t]sx?$/i, exclude: /(node_modules)/, use: [ 'esbuild-loader' ] },
            { test: /\.(sc|sa|c)ss$/i, use: [ //* Use if using imported css files
                /* MiniCssExtractPlugin.loader */, 'style-loader', 'css-loader', /* 'sass-loader' */
                // process.env.NODE_ENV !== 'production'
                //     ? 'style-loader'
                //     : MiniCssExtractPlugin.loader, 'css-loader', /* 'sass-loader' */  
            ]},
            /* { test: /\.css$/i, type: 'asset/resource', generator: { //* Use if using static css files
                emit: true,
                filename: "css/[name].[contenthash:8][ext][query]", 
                //   emit, filename, outputPath, publicPath
            }}, */
            { test: /\.(svg)$/i, type: /* 'asset/resource', 'asset/inline' */'asset/source', 
                /* generator: {
                    dataUrl: content => {
                        content = content.toString();
                        return svgToMiniDataURI(content);
                    } 
                }, */
            },
            { test: /\.(ico|png|jpg|jpeg|gif)$/i, type: 'asset/resource' },
            { test: /\.(woff|woff2|eot|ttf|otf)$/i, type: 'asset/resource' },
        ]
    },
};

// "image-minimizer-webpack-plugin": "^3.8.2",
// "imagemin": "^8.0.1",
// "imagemin-gifsicle": "^7.0.0",
// "imagemin-jpegtran": "^7.0.0",
// "imagemin-optipng": "^8.0.0",
// "imagemin-svgo": "^10.0.1",