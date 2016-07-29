'use strict';
let _ = require('lodash');
function amount_even(collection) {
  //在这里写入代码 1-10的偶数算总数

  return _.chain(collection)
    .filter(num => num %2 ===0)
    .sum()
    .value()
}

module.exports = amount_even;
