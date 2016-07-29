'use strict';
var calculate_average = function(collection){
//计算第偶数个元素的平均数  4
  let _ = require('lodash');
  return _.chain(collection)
    .filter(x => x%2===0)
    .mean()
};
module.exports = calculate_average;
