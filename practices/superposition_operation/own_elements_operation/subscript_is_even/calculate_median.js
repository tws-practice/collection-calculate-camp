'use strict';
let _ = require('lodash');
var calculate_median = function(collection){
  let a = _.filter(collection,x => x%2 === 0);
  return _.mean(a);
};
module.exports = calculate_median;
