
const assert = require('assert');
const svc = require('./auth-service');

describe('The Authentication Service', () => {
  it('should export a function', () => {
    assert.equal(typeof svc.authenticate, 'function');
  });

  it('should not pass bogus passwords', done => {
    svc.authenticate('username=joe&password=bogus', ok => {
      assert(!ok);
      done();
    });
  });

  it('should hardcode password to "secret"', done => {
    svc.authenticate('username=joe&password=secret', ok => {
      assert(ok);
      done();
    });
  });

  it('should reject empty cookie header', () => {
    assert(!svc.isValidCookie(undefined));
    assert(!svc.isValidCookie(''));
    assert(!svc.isValidCookie('foo=bar'));
  });

  it('should reject invalid cookie header', () => {
    assert(!svc.isValidCookie('foo=bar; auth.status=bogus;baz=qox'));
    assert(!svc.isValidCookie('foo=bar; auth.status=signedin;baz=qox'));
  });

  it('should validate authorized cookie', () => {
    assert(svc.isValidCookie('foo=bar; auth.status=signedin:joe;baz=qox'));
  });
});
