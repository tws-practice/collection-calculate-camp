'use strict';
let _ = require('lodash');

var even_group_calculate_average = function(collection){
  let result = [];
  let [a,b,c] = [0,0,0];
let newCollection = _.chain(collection).filter(element =>collection.indexOf(element)%2 !== 0)
                                       .filter(x => x%2 === 0).value();
     a = _(newCollection).filter(x => x<10).mean();
     b = _(newCollection).filter(x => x >= 10 && x < 100).mean();
     c = _(newCollection).filter(x => x >= 100).mean();
  result =  _.compact([a,b,c]);
  if(result.length === 0){
    return [0];
  }
   return result;
};
var collection_b = [1, 3, 5, 7, 33, 55, 31, 555, 777];

console.log(even_group_calculate_average(collection_b))
module.exports = even_group_calculate_average;
