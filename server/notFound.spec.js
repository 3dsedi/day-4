const assert = require('assert');
const http = require('http');
const resource = require('./notFound');

describe('Not-Found Route', () => {
  let server;

  const serverOptions = {
    address: 'http://localhost',
    method: 'GET'
  };

  beforeEach(() => {
    server = http.createServer((req, res) => resource.route(req, res));
    server.listen(0);
    serverOptions.port = server.address().port;
  });

  describe('Not Found', () => {
    it('should respond with status 404', done => {
      http.request(serverOptions, res => {
        assert.equal(res.statusCode, 404);
        done();
      }).end();
    });

    it('should use content type text/html', done => {
      http.request(serverOptions, res => {
        assert.equal(res.headers['content-type'], 'text/html');
        done();
      }).end();
    });
  });
});
