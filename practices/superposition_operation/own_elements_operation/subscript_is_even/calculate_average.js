'use strict';
let _ =require("lodash");
var calculate_average = function(collection){
  let arr = _.chain(collection)
    .filter((item,index)=> index%2!==0)
    .mean()
    .value();
return arr;
}
module.exports = calculate_average;
