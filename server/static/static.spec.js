const assert = require('assert');
const http = require('http');
const views = require('./static');

describe('Views route', () => {
  let server;

  const serverOptions = {
    address: 'http://localhost',
    method: 'GET'
  };

  beforeEach(() => {
    server = http.createServer((req, res) => views.route(req, res));
    server.listen(0);
    serverOptions.port = server.address().port;
  });

  describe('route', () => {
    it('should serve file with status 200', done => {
      serverOptions.path = '/index.html';
      http.request(serverOptions, res => {
        assert.equal(res.statusCode, 200);
        done();
      }).end();
    });

    it('should run callback when resources was not found', done => {
      server = http.createServer((req, res) => views.route(req, res, () => {
        assert(true);
        done();
      }));
      server.listen(0);
      serverOptions.port = server.address().port;
      serverOptions.path = '/i-dont-exist';
      http.request(serverOptions, res => {
        assert.equal(res.statusCode, 404);
      }).end();
    });

    it('should use content type text/html by default', done => {
      serverOptions.path = '/index.html';
      http.request(serverOptions, res => {
        assert.equal('text/html', res.headers['content-type']);
        done();
      }).end();
    });

    it('should use content type text/css for all content under ./css', done => {
      serverOptions.path = '/css/style.css';
      http.request(serverOptions, res => {
        assert.equal('text/css', res.headers['content-type']);
        done();
      }).end();
    });
  });
});
