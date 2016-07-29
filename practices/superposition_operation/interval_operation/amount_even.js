'use strict';
let _ = require('lodash');
function amount_even(collection) {
  //在这里写入代码 1-10的偶数算总数
  return _(collection)
    .remove(num => num %2 ===0)
    .sum(collection)
}

module.exports = amount_even;
