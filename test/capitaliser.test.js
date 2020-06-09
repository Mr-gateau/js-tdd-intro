// test/capitalizer.test.js
const assert = require('assert');
const Capitalizer = require('../capitalizer');

// give the test suite a label using describe
describe('capitalizer', () => {
  // give the test a label using it
  it('NEW is a function accepting one argument', () => {
    assert.strictEqual(typeof Capitalizer, 'function');
    assert.strictEqual(Capitalizer.length, 1);
  });

  it('NEW transforms javaScript correctly', () => {
    assert.strictEqual(Capitalizer('javaScript'), 'JavaScript');
  });
  it('NEW transforms multi words', () => {
    assert.strictEqual(Capitalizer('bleu rouge vert'), 'Bleu Rouge Vert');
  })

  it('NEW works with a 1-character string', () => {
    assert.strictEqual(Capitalizer('z'), 'Z');
  });

  it('NEW works with an empty string', () => {
    assert.strictEqual(Capitalizer(''), '');
  });
});
