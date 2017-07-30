'use strict';
let _ = require('lodash');
function amount_even(collection) {
  //在这里写入代码
  return _(collection)
    .filter(x=>x%2 === 0)
    .sum();
}

module.exports = amount_even;
