'use strict';
let _=require('lodash');
function amount_even(collection) {
  let sum=_.chain(collection)
    .filter((element)=>{
      return element%2===0;
    }).sum().value();
  return sum;
}

module.exports = amount_even;
