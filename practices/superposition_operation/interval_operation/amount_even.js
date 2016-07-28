'use strict';
let _=require('lodash');
function amount_even(collection) {
  return _.chain(collection)
    .filter((element)=> {
      if (element % 2 === 0) {
        return element;
      }
    })
    .sum((element)=>element)
    .value();
}

module.exports = amount_even;
