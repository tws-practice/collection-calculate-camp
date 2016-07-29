'use strict';

let _ = require('lodash');

var calculate_average = function (collection) {
   return _(collection)
    .filter((item, index, items)=>(index + 1) % 2 == 0)
    .mean();
};
module.exports = calculate_average;
