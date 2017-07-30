'use strict';
let _ = require('lodash');
function hybrid_operation_to_uneven(collection) {
  //在这里写入代码
  return _(collection)
    .filter(x=>x % 2 === 1)
    .map(x=>x * 3 + 2)
    .value();
}

module.exports = hybrid_operation_to_uneven;

