/* eslint-disable no-console */
function fetchQuote(callback) {
  console.log('using fake quotes');
  callback({
    quote: 'This is a fake quote.'
  });
}

module.exports.fetchQuote = fetchQuote;
