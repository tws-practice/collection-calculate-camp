'use strict';
let _ = require('lodash');
var even_group_calculate_average = function(collection){
  let a =  _.chain(collection).filter((element,index) =>{
    if(index %2 !==0){
      return index;
    }
  }).filter(x => x%2===0).value();

};
module.exports = even_group_calculate_average;
