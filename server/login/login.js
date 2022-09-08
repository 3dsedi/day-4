function redirect(res) {
  res.writeHead(302, { Location: '/login.html' });
  res.end();
}

module.exports.redirect = redirect;
