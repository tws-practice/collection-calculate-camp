'use strict';

let _ = require('lodash');
function hybrid_operation(collection) {
  //每一个数*3 +2再算总和  390
  return _.chain(collection)
    .map(num => num*3+2)
    .sum()
    .value()
}
module.exports = hybrid_operation;

