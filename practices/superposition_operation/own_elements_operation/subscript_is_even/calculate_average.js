'use strict';
let _= require('lodash')
var calculate_average = function(collection){
return _.chain(collection).filter(element =>
  collection.indexOf(element)%2 !== 0
).mean().value();
};
module.exports = calculate_average;
