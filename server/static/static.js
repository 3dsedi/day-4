const fs = require('fs');
const url = require('url');

const base = `${__dirname}/../public`;

function route(req, res, next) {
  const path = url.parse(req.url).pathname;

  fs.readFile(base + path, (err, data) => {
    if (err) {
      next();
    } else {
      const contentType = path.startsWith('/css') ? 'text/css' : 'text/html';
      res.writeHead(200, { 'Content-Type': contentType });
      res.end(data);
    }
  });
}

module.exports.route = route;
