'use strict';
let _=require('lodash');
var calculate_average = function (collection) {
  return _.chain(collection)
    .filter((element, index)=> {
      if (index % 2 !== 0)
        return element;
    })
    .mean()
    .value();
};
module.exports = calculate_average;
