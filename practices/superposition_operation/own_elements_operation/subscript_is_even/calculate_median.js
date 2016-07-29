'use strict';
let _ = require('lodash');
var calculate_median = function (collection) {
  let result = _.chain(collection)
    .sort()
    .filter((element, index)=>index % 2 !== 0).value();
  //console.log(result);
  let q = 0;
  if (result.length % 2 === 0) {
    q = (result[result.length / 2] + result[result.length / 2 - 1]) / 2;
  } else {
    q = result[(result.length - 1) / 2];
  }
  return q;
};
module.exports = calculate_median;
