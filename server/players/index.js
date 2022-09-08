const playersService = require('./players-service');
const playersClient = require('./remote').playersHttpClient;
const players = require('./players');

const service = playersService.create(playersClient);

module.exports.route = players.create(service).route;
