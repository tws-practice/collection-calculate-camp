'use strict';
var calculate_median = function(collection){
 let _ = require('lodash');
  return  _(collection)
    .sort()
    .filter( n => n % 2===0)
    .filter((item, index, items)=> {
        var num = index * 2 - items.length;
        return num == 0 || num === -1 || num === -2
      })
    .mean(_.sum());
};
module.exports = calculate_median;
