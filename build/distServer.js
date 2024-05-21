/* eslint-disable no-console */
import express from 'express';
import path from 'node:path';
import { logg } from '../utils/logger.js';

const PORT = 3299;
const server = express();

server.use( express.static('dist') );

server.get('/', function(req, res) {
    logg( 0, 'Sending file : ' );
    res.sendFile( path.resolve( './dist/index.html' ) );
});

logg( 1, `Hosting at: http://localhost:${PORT}\n\n` );

server.listen(PORT, function(err) {
    if(err) logg( 3, err );
});