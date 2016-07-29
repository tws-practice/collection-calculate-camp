'use strict';
let _ = require('lodash');

var single_element = function(collection){
  let evenArray = _.chain(collection)
    .remove(n => (collection.includes(n) + 1) % 2 === 0)
    .value();

 // let result = [];

//   return _.chain(evenArray)
//     .remove(n => _.size(result) === 0 || result.includes(n))
//     .value();
  return evenArray;
 };

module.exports = single_element;
