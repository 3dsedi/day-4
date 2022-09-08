const assert = require('assert');
const jsdom = require('jsdom');
const home = require('./home');

const { JSDOM } = jsdom;

describe('The Home Page', () => {
  const cookieJar = new jsdom.CookieJar();
  const dom = new JSDOM('<!DOCTYPE html><html><body><section class="greeting"><h2>REPLACE ME!</h2></section></body></hmtl>', {
    url: 'http://foo.bar',
    cookieJar
  });
  global.document = dom.window.document;
  global.window = dom.window;

  it('should replace greeting for any named user', () => {
    document.cookie = 'dog=barf';
    document.cookie = 'auth.status=signedin:joe';
    document.cookie = 'cat=meow';
    const selection = '.greeting > h2';
    home.addGreetingTo(selection);
    const element = document.querySelector(selection);
    assert.equal(element.innerHTML, 'Welcome Joe!');
  });
});
