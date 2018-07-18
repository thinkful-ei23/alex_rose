'use strict';
let str = 'craft, block, argon, meter, bells, brown, croon, droop';

const cipher = {
  a: 1,
  b: 2,
  c: 3,
  d: 4
};

function decode(word) {
  let firstLetter = word.slice(0, 1);
  let i = cipher[firstLetter];
  if (!i) {
    return ' ';
  }
  return word[i];
}

function decodeWords(str) {
  let result = str.split(', ');
  let result2 = '';
  for (let i = 0; i < result.length; i++) {
    result2 += decode(result[i]);
  }
  return result2;
}

console.log(decodeWords(str));
