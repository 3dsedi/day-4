const url = require('url');

function create(service) {
  return {
    route: (req, res) => {
      // Hint: Split request into two subroutes depending on request path.
      // Hint: Check HTTP method type on request. Only allow GET methods.
      res.statusCode = 500;
      res.end('Not Implemented!');
    }
  };
}

function normalize(path) {
  return url.parse(path)
    .pathname
    .replace(/\/+$/, '')
    .replace('/api/players', '/');
}

function ok(res, data) {
  res.statusCode = 200;
  res.setHeader('content-type', 'application/json');
  res.end(JSON.stringify(data));
}

function methodNotAllowed(res) {
  res.statusCode = 405;
  res.setHeader('Allow', 'GET');
  res.end();
}

module.exports.create = create;
