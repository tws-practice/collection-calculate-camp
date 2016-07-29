'use strict';
let _=require('lodash');
function hybrid_operation(collection) {
  return _.chain(collection)
    .map((element)=> element * 3 + 2)
    .sum()
    .value();
}

module.exports = hybrid_operation;

