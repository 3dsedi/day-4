/* eslint-disable no-console */
const url = require('url');
const home = require('./home');
const view = require('./static');
const notFound = require('./notFound');
const auth = require('./auth');
const login = require('./login');
const players = require('./players');

function validateRequest(req, res, fn, cb) {
  return auth.validCookie(req.headers.cookie)
    ? fn(req, res, cb) : login.redirect(res);
}

function match(path, pattern) {
  const refinedPath = path === '/' ? path : path.replace(/\/+$/, '');
  return pattern instanceof RegExp
    ? pattern.test(refinedPath) : refinedPath === pattern;
}

function all(req, res) {
  const path = url.parse(req.url).pathname;

  console.log(req.method, path);

  if(match(path, /css$/)) {
    return view.route(req, res, () => notFound.route(req, res));
  }
  if(match(path, '/')) {
    return validateRequest(req, res, home.route);
  }
  if(match(path, '/index')) {
    return home.redirect(res);
  }
  if(match(path, '/login')) {
    return login.redirect(res);
  }

  if(match(path, '/login.html') ||
     match(path, '/401.html') ||
     match(path, '/404.html')) {
    return view.route(req, res);
  }

  if(match(path, '/api/authenticate')) {
    return auth.route(req, res);
  }

  if(match(path, /\/api\/players.?/)) {
    return players.route(req, res);
  }

  validateRequest(req, res, view.route, () => notFound.route(req, res));
}


module.exports.all = all;
