'use strict';
let _=require('lodash');
var calculate_median = function(collection){
  let indexEven=_
    .chain(collection)
    .filter(function(element,index){
      if(index%2===1){
        return element;
      }
    })
    .sort()
    .value();
  return _.chain(indexEven)
    .drop(Math.ceil(indexEven.length/2)-1)
    .dropRight(Math.ceil(indexEven.length/2)-1)
    .mean()
    .ceil()
    .value();
};
module.exports = calculate_median;
