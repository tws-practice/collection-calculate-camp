'use strict';
let _ = require('lodash');
function average_uneven(collection) {
  //在这里写入代码 1-10的奇数算平均数
  return _.chain(collection)
    .filter(num => num%2!==0)
    .mean()
    .value()
}
module.exports = average_uneven;
