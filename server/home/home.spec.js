const assert = require('assert');
const http = require('http');
const resource = require('./home');

describe('Home Route', () => {
  let server;
  let port = null;

  const serverOptions = {
    address: 'http://localhost',
    method: 'GET'
  };

  beforeEach(() => {
    server = http.createServer((req, res) => resource.route(req, res));
    server.listen(0);
    port = server.address().port;
    serverOptions.port = port;
  });

  function send(options, cb) {
    http.request(options, res => {
      cb(res);
    }).end();
  }

  describe('The resource at /', () => {
    it('should respond with status 200', done => {
      send(serverOptions, res => {
        assert.equal(res.statusCode, 200);
        done();
      });
    });

    it('should use content type text/html', done => {
      send(serverOptions, res => {
        assert.equal(res.headers['content-type'], 'text/html');
        done();
      });
    });
  });

  describe('/index', () => {
    const redirectServer = http.createServer((req, res) => resource.redirect(res));
    redirectServer.listen(0);

    it('should redirect request to /', done => {
      send({
        address: 'http://localhost',
        method: 'GET',
        port: redirectServer.address().port,
        path: '/index'
      }, res => {
        assert.equal(res.statusCode, 302);
        assert.equal(res.headers.location, '/');
        done();
      });
    });
  });
});
