const fs = require('fs');

const welcome = fs.readFileSync('./server/public/index.html');

module.exports.route = (req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.end(welcome);
};

module.exports.redirect = res => {
  res.writeHead(302, { Location: '/' });
  res.end();
};
