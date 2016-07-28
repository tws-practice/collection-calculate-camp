'use strict';
let _=require('lodash');

var calculate_average = function (collection) {
  return _.chain(collection)
    .filter((element, index)=> index % 2 === 1)
    .mean()
    .value();
};
module.exports = calculate_average;
