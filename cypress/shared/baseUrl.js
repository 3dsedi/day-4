const config = require('../../server/config');
const { port } = config.server;
export const baseUrl = `http://localhost:${port}`;
