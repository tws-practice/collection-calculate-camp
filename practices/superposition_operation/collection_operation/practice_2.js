'use strict';
let _=require('lodash');
function hybrid_operation_to_uneven(collection) {
  let sum=_.chain(collection)
    .filter((element)=>{
      return element%2!==0;
    }).map((element)=>{
      return element*3+2;
    }).value();
  return sum;
}

module.exports = hybrid_operation_to_uneven;

