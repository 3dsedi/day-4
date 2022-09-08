const assert = require('assert');
const http = require('http');
const login = require('./login');

describe('Login Route', () => {
  let server; let
    port;

  beforeEach(() => {
    server = http.createServer((req, res) => login.redirect(res));
    server.listen(0);
    port = server.address().port;
  });

  describe('main', () => {
    it('should redirect to public file', () => {
      const options = {
        address: 'http://localhost',
        port,
        method: 'GET'
      };
      http.request(options, res => {
        assert.equal(res.statusCode, 302);
        assert.equal(res.headers.location, '/login.html');
      }).end();
    });
  });
});
