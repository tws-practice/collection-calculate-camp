'use strict';
let _ =require("lodash");
var calculate_average = function(collection){
  let arr = _.chain(collection)
    .filter((item,index)=>{if(index%2!==0)return item;})
    .mean()
    .value();
return arr;
}
module.exports = calculate_average;
