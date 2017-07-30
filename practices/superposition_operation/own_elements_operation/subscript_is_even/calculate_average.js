'use strict';
let _ = require('lodash');
var calculate_average = function(collection){
  return _(collection)
    .filter(temp=>temp%2==0)
    .mean(_.sum(n=>n));
};
module.exports = calculate_average;
