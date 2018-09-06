'use strict';
let _=require("lodash");
function one_add_next_multiply_three(collection){
 // return [12,24,36,48,60,72,84,96,108,120];
  return _.chain(collection)
    .filter((item,index,items)=>{
      return (item+items[index+1])*3;
    })
    .value();
}
module.exports = one_add_next_multiply_three;
