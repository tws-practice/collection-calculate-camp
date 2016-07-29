'use strict';

const _ = require('lodash');

var calculate_median = function (collection) {
  let a = _.chain(collection)
    .filter((array, index) => {
      return (index+1) % 2 === 0;
    })
    .sortBy()
    .filter((array, index, arrays) => {
      var number = index * 2 - arrays.length;
      return number === 0 || number === -1 || number === -2;
    }).value();

  return a.length === 1 ? a[0] : (a[0] + a[1]) / 2;

};
module.exports = calculate_median;
