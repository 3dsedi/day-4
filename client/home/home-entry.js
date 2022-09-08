const home = require('./home');
const quotes = require('./quotes');


const client = process.env.NODE_ENV === 'production'
  ? require('./quotes-client')
  : require('./quotes-client.mock');

const appendToDom = quote => quotes.appendTo(document.querySelector('#quote-container'), quote);

home.addGreetingTo('.greeting > h2');

client.fetchQuote(appendToDom);
