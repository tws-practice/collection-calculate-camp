'use strict';

function hybrid_operation(collection) {
  return _.chain(collection)
    .map((element)=>{
      return element*3+2;
    })
    .sum((element)=>element)
    .value();
}

module.exports = hybrid_operation;

