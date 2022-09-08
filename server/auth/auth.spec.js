const assert = require('assert');
const http = require('http');
const auth = require('./auth');

describe('The Authentication Route', () => {
  const address = 'http://localhost';
  const formUrlEncoded = 'application/x-www-form-urlencoded';

  const options = {
    address
  };

  let server; let
    route;

  describe('A valid authentication', () => {
    const isAuthenticated = true;

    const body = 'username=joe&password=secret';

    beforeEach(() => {
      route = auth.create((password, cb) => {
        cb(isAuthenticated);
      }).route;

      server = http.createServer((req, res) => route(req, res));
      server.listen(0);

      options.port = server.address().port;
    });

    it('should respond with redirect when req authenticates', done => {
      options.method = 'POST';
      options.headers = { 'content-type': formUrlEncoded };

      const req = http.request(options, res => {
        assert.equal(res.statusCode, 302);
        assert.equal(res.headers.location, '/');
        done();
      });
      req.write(body);
      req.end();
    });

    it('should reject wrong content type', done => {
      options.method = 'POST';
      options.headers = { 'content-type': 'application/json' };

      const req = http.request(options, res => {
        assert.equal(res.statusCode, 415);
        done();
      });
      req.write(body);
      req.end();
    });

    it('should reject GET requrest', done => {
      options.method = 'GET';

      const req = http.request(options, res => {
        assert.equal(res.statusCode, 405);
        done();
      });
      req.write(body);
      req.end();
    });

    it('should set authorized cookie', done => {
      options.method = 'POST';
      options.headers = { 'content-type': formUrlEncoded };

      const req = http.request(options, res => {
        const cookie = res.headers['set-cookie'];
        assert.equal('auth.status=signedin:joe;path=/', cookie);
        done();
      });

      req.write(body);
      req.end();
    });
  });

  describe('An invalid authentication', () => {
    const isAuthenticated = false;

    beforeEach(() => {
      const { route: authRoute } = auth.create((password, cb) => {
        cb(isAuthenticated);
      });

      server = http.createServer((req, res) => authRoute(req, res));
      server.listen(0);

      options.port = server.address().port;
    });

    it('should redirect to 401 page when unauthorized', done => {
      options.method = 'POST';
      options.headers = { 'content-type': formUrlEncoded };

      http.request(options, res => {
        assert.equal(res.statusCode, 302);
        assert.equal(res.headers.location, '/401.html');
        done();
      }).end();
    });

    it('should not set cookie when unauthorized', done => {
      options.method = 'POST';
      options.headers = { 'content-type': formUrlEncoded };

      http.request(options, res => {
        const cookie = res.headers['set-cookie'];
        assert(!cookie);
        done();
      }).end();
    });
  });
});
