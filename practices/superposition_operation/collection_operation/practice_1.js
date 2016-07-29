'use strict';
let _ = require('lodash');
function hybrid_operation(collection) {
  //在这里写入代码
  return _(collection)
    .map(x=>x * 3 + 2)
    .sum();
}

module.exports = hybrid_operation;

