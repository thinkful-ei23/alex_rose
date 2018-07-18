'use strict';

const loaf = {
  flour : 300,
  water : 210,
  hyderation : function() {
    return (this.water / this.flour) * 100;
  }
};


console.log('Flour: ' + loaf.flour + ' Water: ' + loaf.water);
console.log(loaf.hyderation());