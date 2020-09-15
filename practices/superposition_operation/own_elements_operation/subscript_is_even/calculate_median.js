'use strict';
let _ = require("lodash");
var calculate_median = function(collection){
  let result = _.chain(collection).filter((index) =>{
    return index%2 === 0;
  }).sort().filter((item,index,items) =>{
    let number = (index+1)*2 - items.length;
    return number===0||number ===1||number ===2
  }).mean().value();
   return result;
};
module.exports = calculate_median;
