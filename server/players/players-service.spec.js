const assert = require('assert');
const playerService = require('./players-service');

describe('The Players Service', () => {
  const playerJoe = { name: 'joe', gender: 'male', url: 'http://foo.bar/3/' };
  const playerJane = { name: 'jane', gender: 'female', url: 'http://baz.qox/4/' };
  const allPlayersData = {
    count: 20,
    next: 'http://remote.api?page=4',
    prev: 'http://remote.api?page=2',
    results: [playerJoe, playerJane]
  };
  let service;

  before(() => {
    function mockPlayerClient() {
      return {
        fetchAll: cb => cb(allPlayersData),
        getPlayer: (id, cb) => cb(playerJoe)
      };
    }

    service = playerService.create(mockPlayerClient());
  });

  it('should use remote client to get all players', done => {
    const expected = {
      count: 20,
      next: 4,
      prev: 2,
      results: [
        {
          name: 'joe',
          eid: '3'
        },
        {
          name: 'jane',
          eid: '4'
        }
      ]
    };
    service.all(all => {
      assert.deepEqual(expected, all);
      done();
    });
  });

  it('should use remote client to get player by id', done => {
    const expected = {
      name: 'joe',
      gender: 'male'
    };
    service.get(3, usr => {
      assert.deepEqual(expected, usr);
      done();
    });
  });
});
