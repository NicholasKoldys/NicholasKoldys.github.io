/* eslint-disable no-console */
import express from 'express';
import Webpack from 'webpack';
import webpackConfig from './webpack.dev.config.js';
/* // ! USE IN DEV ONLY */
import middleware from 'webpack-dev-middleware';
import { logg } from '../utils/logger.js';

const PORT = 3299;
const server = express();
const compiler = Webpack( webpackConfig );

/**
 * * Callback for response injection.
 * @callback pathResponse
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 */

/**
 * 
 * @param {string} path 
 * @param {pathResponse} callback
 */
export function apiInjectionPoint( path, callback ) {
    app.get( path, ( req, res ) => {
        callback( req, res );
    } );
}


server.use( 
    middleware(compiler, { 
        // noInfo: true,
        // publicPath: `/`
    })
);

logg( 1, `Hosting at: http://localhost:${PORT}\n\n` );

server.listen(PORT, function(err) {
    if(err) logg( 3, err );
});