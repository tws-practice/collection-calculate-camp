'use strict';
let _ = require('lodash');
// var collection = [1, 5, 7, 11, 35, 67];
function hybrid_operation(collection) {
  let a = _.chain(collection)
    .map((element)=>element * 3 + 2)
    .sum((element)=>element)
    .value();
  return a;
}
module.exports = hybrid_operation;


