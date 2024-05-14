// import { merge } from "webpack-merge";
import path from 'node:path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'css-minimizer-webpack-plugin';
import { EsbuildPlugin } from 'esbuild-loader';
import { commonConfig } from "./webpack.base.config.js";

process.env.NODE_ENV = 'development'

export default  /* merge( commonConfig, { */
{ 
    ...commonConfig, 
    mode: "development",
    // devtool: "inline-source-map",
    devtool: "eval-source-map", // ? Allows accurate debugging with source code in browser

    entry: {
        main: path.resolve("src/index.js"),
        // vendor:["vue","vuex","./web/common/js/adapt",entryPath,'webpack/hot/dev-server'],
    },

/*     module: {
        rules: [
            ...commonConfig.module.rules,
            
        ]
    } */

    // plugins: [
    //     new webpack.ProvidePlugin({
    //         Vue:"vue",
    //         Vuex:"vuex",
    //         _$:require.resolve("./web/common/js/common.js"),
    //         _net:require.resolve("./web/common/js/net"),
    //         _session:require.resolve("./web/common/js/local"),
    //         $:require.resolve("./web/console/common/js/common.js"),
    //         net:require.resolve("./web/console/common/js/net.js"),
    //         session:require.resolve("./web/console/common/js/local"),
    //         helper:require.resolve("./web/console/common/js/helper"),
    //     }),
    //     new webpack.optimize.CommonsChunkPlugin({ name: 'vendor', filename: '[name].bundle.js'}),
    //     //new BundleAnalyzerPlugin()
    //     new webpack.NamedModulesPlugin(),
    //     new webpack.HotModuleReplacementPlugin()
    // ],

    // module: {
    //     loaders: [
    //         {
    //             test: /\.css$/,
    //             loaders: ['style', 'css'],
    //             include: path.resolve(__dirname, 'web')
    //         },
    //         {
    //             test: /\.vue$/,
    //             loader:"vue-loader?cacheDirectory",
    //             include: path.resolve(__dirname, 'web'),
    //             options: {
    //                 loaders: {
    //                     js: 'babel-loader'
    //                 }
    //             }
    //         },
    //         {
    //             test: /\.html$/,
    //             loader: "html-loader?attrs=img:src img:data-src",
    //             include: path.resolve(__dirname, 'web')
    //         },
    //         {
    //             test: /\.(png|jpg|gif|jpeg)$/,
    //             loader: "url-loader?limit=30000",
    //             include: path.resolve(__dirname, 'web')
    //         }
    //     ]
    // },

    // target: "electron-renderer",
    // devtool: '#cheap-module-eval-source-map',
    // devtool: 'source-map',

    // resolve: {
    //     modules: [path.resolve(__dirname, 'web/console'),path.resolve(__dirname, 'node_modules')],
    //     alias: {
    //         "vue": path.join(__dirname, 'node_modules/vue/dist/vue.min'),
    //         "vuex": path.join(__dirname, 'node_modules/vuex/dist/vuex.min')
    //     }
    // },

    // resolveLoader: {
    //     modules: [path.resolve(__dirname, 'node_modules')],
    // },

    // externals: [nodeExternals()],
    
    // devServer: {
        // files are served from this folder
        // contentBase: 'dist',
        // support HTML5 History API for react router
        // historyApiFallback: true,
        // listen to port 5000, change this to another port if another server 
        // is already listening on this port
        // contentBase: path.join( __dirname, 'public'),
        // compress: true, 
        // port: 5000, 
        // static: './public'
        /* allowedHosts?,  
        bonjour?, 
        client?, 
        compress?, 
        devMiddleware?, 
        headers?, 
        historyApiFallback?, 
        host?, 
        hot?, 
        ipc?, 
        liveReload?, 
        onListening?, 
        open?, 
        port?, 
        server?, 
        setupExitSignals?, 
        setupMiddlewares?, 
        static?, 
        watchFiles?, 
        webSocketServer?  */

        // proxy requests to the JSON server REST service
        /* proxy: {
            '/widgets': {
                // server to proxy
                target: 'http://0.0.0.0:3010'
            }
        } */
    // }
};