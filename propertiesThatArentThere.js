'use strict';
const obj1 = {
  name: 'Roxy',
  jobTitle: 'Boss'
};

const obj2 = {
  name: 'Charlie',
  jobTitle: 'Teacher',
  boss: 'Roxy'
};

const obj3 = {
  name: 'Heidi',
  jobTitle: 'Admin',
  boss: 'Roxy'
};

const arr = [obj1, obj2, obj3];
arr.forEach(function (object) {
  if (object.boss) {
    console.log(`${object.jobTitle} ${object.name} reports to ${object.boss}.`);
  } else {
    console.log(`${object.jobTitle} ${object.name} doesn't report to anybody`);
  }
});