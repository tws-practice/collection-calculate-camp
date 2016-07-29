'use strict';
let _ = require('lodash');
function hybrid_operation_to_uneven(collection) {
  //每一个奇数*3+5再求总和  408

  return  _.chain(collection)
    .filter(num => num % 2!== 0)
    .map(n => n*3+5)
    .sum()
    .value()
}

module.exports = hybrid_operation_to_uneven;

