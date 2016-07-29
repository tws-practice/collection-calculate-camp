'use strict';
let _ = require('lodash');
function average_uneven(collection) {
  //在这里写入代码 1-10的奇数算平均数
  return _(collection)
    .remove(num => num%2!==0)
    .mean(_.sum(n => n))
}
module.exports = average_uneven;
