'use strict';
const obj = {
  foo: 1,
  bar: 2,
  fum: 3,
  quux: 4,
  spam: 5
};

/*
console.log(obj);
*/

for (let value in obj) {
  console.log(`${value} = ${obj[value]}`);
}
