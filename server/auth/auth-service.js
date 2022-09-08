const qs = require('querystring');

const authenticate = (data, callback) => {
  if (data && qs.parse(data).password === 'secret') {
    callback(true);
  } else {
    callback(false);
  }
};

const isValidCookie = cookie => {
  if (cookie) {
    const parts = cookie.split(';');
    const validCookie = parts
      .map(t => t.split('='))
      .filter(t => t[0].trim() === 'auth.status' && /^signedin:.+/.test(t[1].trim()));
    return validCookie.length > 0;
  }

  return false;
};

module.exports.authenticate = authenticate;
module.exports.isValidCookie = isValidCookie;
