'use strict';
let _=require('lodash');
function hybrid_operation(collection) {
  let sum = _.chain(collection)
    .map((element)=>{
      return element*3+2;
    })
    .sum().value();
  return sum;
}

module.exports = hybrid_operation;

