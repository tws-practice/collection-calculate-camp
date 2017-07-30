'use strict';
let _ = require('lodash');
var even_group_calculate_average = function (collection) {
  let value = _(collection)
    .filter((item, index, items)=>(index + 1) % 2 == 0)
    .filter(item=>item % 2 == 0)
    .sortBy()
    .value();
  let a = _(value).filter(v=>v < 10).mean();
  let n = _(value).filter(v=> v > 9 && v < 100).mean();
  let q = _(value).filter(v=>v > 99 && v < 1000).mean();


  return _.compact([a, n, q]);

};
module.exports = even_group_calculate_average;
