
const assert = require('assert');

assert.strictEqual(typeof capitalizeFirst, 'function');
assert.strictEqual(capitalizeFirst.length, 1);
assert.strictEqual(capitalizeFirst('javaScript bleu rouge'), 'JavaScript Bleu Rouge');
assert.strictEqual(capitalizeFirst('z'), 'Z');
assert.strictEqual(capitalizeFirst(''), '');



function capitalizeFirst(input){
  const end = [];

  if(typeof input[0] === 'string' ){
    end.push(input[0].toUpperCase());
    for (let i = 1; i < input.length; i++){
      if (input[i-1] === ' '){
        const neoLeter = input[i].toUpperCase()
        end.push(neoLeter);
      }else {
        end.push(input[i]);
      }
    }
  }else{
    const fin = '';
    return fin;
  }
    return end.join('');
  };
