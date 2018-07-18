'use strict';
const obj1 = {
  name: 'Roxy',
  jobTitle: 'companion',
}; 

const obj2 = {
  name: 'Charlie',
  jobTitle: 'teacher',
}; 

const obj3 = {
  name: 'Heidi',
  jobTitle: 'admin',
}; 

const arr = [obj1, obj2, obj3];
arr.forEach(function (object) {
  console.log(`${object.name} : ${object.jobTitle}`);
});
