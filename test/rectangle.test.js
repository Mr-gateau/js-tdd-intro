// test/capitalizer.test.js
const assert = require('assert');
const Rectangle = require('../Rectangle');

// give the test suite a label using describe
describe('Rectangle', () => {
  // give the test a label using it
  const test = new Rectangle(5,5);
  const deux = new Rectangle(4,5);
it('Square is test', () => {
  //true

  assert.strictEqual(test.isSquare(), true);
  assert.notStrictEqual(deux.isSquare(), false);
  //false
//  assert.strictEqual(test.isSquare(4,5) , false);
});
it('Area test', () => {
  assert.strictEqual(test.getArea() , 25);
});
it('Perimetre test', () => {
  assert.strictEqual(test.getPerimeter() , 20);
});

});
