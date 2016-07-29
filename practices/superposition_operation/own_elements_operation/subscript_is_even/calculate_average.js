'use strict';
let _ = require('lodash');
var calculate_average = function (collection) {
  let result = _.chain(collection)
    .filter((element, index)=>index % 2 !== 0)
    .mean().value();
  return result;
};
module.exports = calculate_average;
