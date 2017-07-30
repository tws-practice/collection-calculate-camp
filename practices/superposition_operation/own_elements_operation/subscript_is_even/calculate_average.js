'use strict';
let _=require('lodash');
var calculate_average = function(collection){
  return _
    .chain(collection)
    .filter(function(element,index){
      if(index%2===1){
        return element;
      }
    })
    .mean()
    .value();
};
module.exports = calculate_average;
