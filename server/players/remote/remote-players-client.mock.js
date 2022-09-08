/* eslint-disable no-console */
function fetchAll(callback) {
  console.log('MOCK', 'fetch all players');
  callback({
    count: 2,
    next: 'http://hocus.pocus/?page=2',
    previous: null,
    results: [
      {
        url: 'http://hocus.pocus/1/',
        name: 'joe'
      },
      {
        url: 'http://hocus.pocus/2/',
        name: 'jane'
      }
    ]
  });
}

function getPlayer(id, callback) {
  console.log('MOCK', 'get player', id);
  const gender = id === '1' ? 'male' : 'female';
  callback({
    name: 'some player name',
    gender
  });
}

module.exports.fetchAll = fetchAll;
module.exports.getPlayer = getPlayer;
