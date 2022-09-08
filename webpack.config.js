var path = require('path');

module.exports = {
  mode: 'development',
  entry: {
    home: './client/home/home-entry.js',
    players: './client/players/players-entry.js',
  },
  output: {
    path: path.resolve(__dirname, 'server/public/javascript'),
    filename: '[name]-bundle.js'
  },
};
