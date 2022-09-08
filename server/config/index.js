/* eslint-disable import/no-dynamic-require */
const env = process.env.NODE_ENV || 'development';
const cfg = require(`./config.${env}`);

module.exports = cfg;
