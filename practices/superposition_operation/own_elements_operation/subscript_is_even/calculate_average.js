'use strict';
let _=require("lodash");
var calculate_average = function(collection){
  return _.chain(collection)
    //.filter(item=>collection.indexOf(item)%2!=0)
    .filter((item,index,items)=>{
      if(index%2!=0)
        return item;
    })
    .mean()
    .value();
};
module.exports = calculate_average;
