'use strict';
let _=require("lodash");
var even_asc_odd_desc = function(collection){
  let evenArray=
    _.chain(collection)
    .filter(item=>item%2===0)
      .sort((value1,value2)=>{return value1-value2;})
      .value();
  let oddArry =
    _.chain(collection)
      .filter(item=>item%2!=0)
      .sort((value1,value2)=>{return value2-value1;})
      .value();
  return _.union(evenArray,oddArry);
};
module.exports = even_asc_odd_desc;
