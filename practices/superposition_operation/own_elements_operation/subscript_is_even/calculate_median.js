'use strict';
let _=require('lodash');
var calculate_median = function(collection){
  return  _(collection)
    .filter(index=>{return index%2 == 0})
    .filter((item,index,items)=>{
      let num = index*2 - items.length;
      return num == -2 ||num==-1||num==0;
    })
    .mean(_.sum(n=>n));
};
module.exports = calculate_median;
