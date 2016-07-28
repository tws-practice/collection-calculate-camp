'use strict';
let _ = require('lodash');

var even_group_calculate_average = function(collection){
  let result = [];
let newCollection = _.chain(collection).filter(element =>collection.indexOf(element)%2 !== 0)
                                       .filter(x => x%2 === 0).value();
 let a = _(newCollection).filter(x => x<10).value();
  let b = _(newCollection).filter(x =>x >= 10 || x < 100).value();
  let c = _(newCollection).filter(x => x >= 100).value();
  result.push(_.sum(a)/a.length);
  result.push(_.sum(b)/b.length);
  result.push(_.sum(c)/c.length);
  return b;
};
  var collection_a = [1, 2, 3, 4, 5, 6, 12, 454, 324, 21, 45, 644, 34, 56, 345, 570, 8, 4, 14];
console.log(even_group_calculate_average(collection_a))
module.exports = even_group_calculate_average;
