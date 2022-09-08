const authResource = require('./auth');
const authService = require('./auth-service');

module.exports.route = authResource.create(authService.authenticate).route;
module.exports.validCookie = authService.isValidCookie;
