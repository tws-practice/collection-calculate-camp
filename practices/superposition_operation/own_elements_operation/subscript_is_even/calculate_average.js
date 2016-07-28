'use strict';
let _ = require('lodash');
var calculate_average = function (collection) {
  let value = _.chain(collection)
    .filter((item,index) =>{
      return index%2===1;
    })
    .mean()
    .value();
  return value;
};

module.exports = calculate_average;
