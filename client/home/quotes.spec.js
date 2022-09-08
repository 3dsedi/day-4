const assert = require('assert');
const jsdom = require('jsdom');
const quotes = require('./quotes');

const { JSDOM } = jsdom;

describe('Random Quotes', () => {
  let document;
  const quote = {
    quote: 'lorem ipsum dolor'
  };

  beforeEach(() => {
    const dom = new JSDOM('<!DOCTYPE html><div id="test" />');
    document = dom.window.document;
  });

  it('should append quote to selection', () => {
    const expected = '<div class="quote"><blockquote>lorem ipsum dolor</blockquote></div>';
    const element = document.querySelector('#test');

    quotes.appendTo(element, quote);

    assert.equal(expected, element.innerHTML);
  });
});
