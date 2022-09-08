/* eslint-disable no-console */
const config = require('./config');

const host = `${window.location.protocol}//${window.location.hostname}`;
const { port } = window.location;
const base = port ? `${host}:${port}` : host;

/*
 * No tests attached!
 *
 * This module is calling external resources by using standard
 * and/or 3rd party libaries.
 * It's not our code and should not be tested on unit level!!!
 * That has probably (or hopefully?) already been done by the authors of
 * this code that we've chosen to trust.
 *
 * Instead, we break the code out into this minimal module and rely on e2e and
 * manual tests
 * with mocked and/or real implentations.
 *
 * A common mistake is to start mocking these libaries by stubbing or using a
 * mocking framework such
 * as Sinon or similar. However, that's almost always a big mistake.
 * More often than not, it adds to much
 * cognitive load on your brain to be worth the effort. On top of that,
 * it often leads to unmaintainable code.
 * Don't fall into that trap!
 *
 * Develop the code in the node repl or in the browser.
 * Then copy/paste.
 * Let the e2e tests verify it works
 * on the build server.
 */

function fetchPlayers(callback) {
  console.log('Not Implemented!');
  // Hint: Use XMLHttpRequest or fetch (protip: use fetch)
  // against our own players api. Extract the json message and
  // send that back using the callback function.
}

function getPlayer(uri, callback) {
  console.log('Not Implemented!');
  // Hint: Use XMLHttpRequest or fetch (protip: use fetch)
  // against our own players api. Extract the json message and
  // send that back using the callback function.
}

module.exports.fetchPlayers = fetchPlayers;
module.exports.getPlayer = getPlayer;
