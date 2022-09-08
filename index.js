/* eslint-disable no-console */
const http = require('http');
const config = require('./server/config');
const routes = require('./server');

const { port } = config.server;

const resources = (req, res) => routes.all(req, res);

const server = http.createServer(resources).listen(port);

server.on('listening', () => console.log('Server is listening on port', server.address().port));
