'use strict';
let _ = require('lodash');
var calculate_median = function (collection) {
  let value = _.chain(collection)
    .filter((item, index)=> {
      return index % 2 === 1;
    })
    .sort()
    .value();
  if (value.length % 2 === 1) {
    return value[_.floor(value.length / 2)];
  }else {
    return (value[value.length/2]+value[value.length/2-1])/2;
  }
};
module.exports = calculate_median;
