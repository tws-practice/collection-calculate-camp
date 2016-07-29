'use strict';
let _ = require('lodash');
function hybrid_operation_to_uneven(collection) {
  //在这里写入代码,每一个奇数*3+2  [5,17,23,35,107,203]
  return _(collection)
    .remove(num => num % 2!==0)
    .map(n => n*3+2)
    .value()
}

module.exports = hybrid_operation_to_uneven;

