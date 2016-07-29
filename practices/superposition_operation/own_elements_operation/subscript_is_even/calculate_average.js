'use strict';
let _ = require('lodash');
var calculate_average = function(collection){
  let a =_.chain(collection)
    .filter(item=>collection.indexOf(item%2 != 0))
    .mean((element)=>element)
    .value();
};
return  calculate_average;
module.exports = calculate_average;


