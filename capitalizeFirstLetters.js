// capitalizeFirst.js
const assert = require('assert');

assert.strictEqual(typeof capitalizeFirst, 'function');

assert.notEqual(capitalizeFirst.length, 0);

assert.strictEqual(capitalizeFirst('javaScript bleu'), 'JavaScript Bleu');

assert.strictEqual(capitalizeFirst('z'), 'Z');

assert.strictEqual(capitalizeFirst(''), '');
