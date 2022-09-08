const fs = require('fs');

const welcome = fs.readFileSync('./server/public/404.html');

function route(req, res) {
  res.writeHead(404, { 'Content-Type': 'text/html' });
  res.end(welcome);
}

module.exports.route = route;
