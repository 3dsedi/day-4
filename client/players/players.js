/* eslint-disable no-console */
function appendTo(element, quote) {
  console.log('Not Implemented!');
  throw new Error('Not Implemented!');
  // Hint: Append new HTML content to element.
}

function playerData(element, id, data) {
  const elements = [];
  elements.push(`<p>Name: ${data.name}</p>`);
  elements.push(`<p>Gender: ${data.gender}</p>`);
  console.log('Not Implemented!');
  throw new Error('Not Implemented!');
  // Hint: Append new HTML content to element.
  // Hint: Add `#id=${id}` to browser history.
  //       Use pushState(<stateobject>,<title>,<url>)
  //        from the window history api with stateobject and
  //        title set to null.
  //        (https://developer.mozilla.org/en-US/docs/Web/API/History_API)
}

function ifIdExist(hash, callback) {
  console.log('Not Implemented!');
  throw new Error('Not Implemented!');
  // Hint: Check weather there is any id in the hash, i.e. check that the hash exists.
  // If you find any, use it with the callback function.
}

function asHtml(players) {
  const elements = ['<ul>'];
  players.results.forEach(u => elements.push(entry(u)));
  elements.push('</ul>');
  return elements.join('');
}

function entry(u) {
  return `<li><button onclick='addPlayerData(${u.eid});'>${u.name}</button></li>`;
}

module.exports.appendTo = appendTo;
module.exports.playerData = playerData;
module.exports.ifIdExist = ifIdExist;
