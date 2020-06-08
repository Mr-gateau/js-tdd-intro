// capitalizeFirst.js
const assert = require('assert');

assert.strictEqual(typeof capitalizeFirstLetters, 'function');

assert.notEqual(capitalizeFirstLetters.length, 0);

assert.strictEqual(capitalizeFirstLetters('javaScript bleu'), 'JavaScript Bleu');

assert.strictEqual(capitalizeFirstLetters('z'), 'Z');

assert.strictEqual(capitalizeFirstLetters(''), '');
