const assert = require('assert');
const http = require('http');
const players = require('./players');

describe('The Players Resource', () => {
  const base = 'http://localhost';
  const options = { address: base };

  let server; let
    route;

  describe('Players root', () => {
    const results = JSON.stringify({
      count: 0,
      results: [
        {
          name: 'joe',
          gender: 'male'
        }
      ]
    });

    beforeEach(() => {
      function service() {
        return {
          all(callback) {
            callback(results);
          }
        };
      }
      route = players.create(service());
      server = http.createServer((req, res) => route.route(req, res));
      server.listen(0);

      options.port = server.address().port;
      options.method = 'GET';
      options.path = '/api/players';
    });

    it('should respond with status 200 ok', done => {
      http.request(options, res => {
        assert.equal(200, res.statusCode);
        done();
      }).end();
    });

    it('should respond with content type', done => {
      http.request(options, res => {
        const contentType = res.headers['content-type'];
        assert.equal('application/json', contentType);
        done();
      }).end();
    });

    it('should respond with player', done => {
      http.request(options, res => {
        var data = [];

        res.on('data', chunk => {
          data.push(chunk);
        });
        res.on('end', () => {
          const actual = Buffer.concat(data).toString();
          assert.equal(JSON.stringify(results), actual);
          done();
        });
      }).end();
    });

    it('should set Allow header when method is not accepted', done => {
      options.method = 'PUT';
      http.request(options, res => {
        assert.equal(405, res.statusCode);
        assert.equal('GET', res.headers.allow);
        done();
      }).end();
    });
  });

  describe('Players /:id', () => {
    const player = {
      name: 'joe',
      gender: 'male'
    };

    beforeEach(() => {
      function service() {
        return {
          all() {
            throw new Error('this must be an error');
          },
          get(id, callback) {
            callback(player);
          }
        };
      }
      route = players.create(service());
      server = http.createServer((req, res) => route.route(req, res));
      server.listen(0);

      options.port = server.address().port;
      options.method = 'GET';
      options.path = '/1';
    });

    it('should respond with status 200', done => {
      http.request(options, res => {
        assert.equal(200, res.statusCode);
        done();
      }).end();
    });

    it('should handle trailing "/"', done => {
      options.path = '/1/';
      http.request(options, res => {
        assert.equal(200, res.statusCode);
        done();
      }).end();
    });

    it('should respond with content type', done => {
      http.request(options, res => {
        assert.equal('application/json', res.headers['content-type']);
        done();
      }).end();
    });

    it('should respond with player data', done => {
      http.request(options, res => {
        const data = [];

        res.on('data', chunk => {
          data.push(chunk);
        });

        res.on('end', () => {
          const actual = Buffer.concat(data).toString();
          assert.equal(JSON.stringify(player), actual);
          done();
        });
      }).end();
    });

    it('should set Allow header when method is not accepted', done => {
      options.method = 'PUT';
      http.request(options, res => {
        assert.equal(405, res.statusCode);
        assert.equal('GET', res.headers.allow);
        done();
      }).end();
    });
  });
});
