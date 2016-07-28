'use strict';
let _=require('lodash');
function hybrid_operation_to_uneven(collection) {
  return _.chain(collection)
    .filter((element)=> {
      if (element % 2 === 1) {
        return element;
      }
    })
    .map((element)=> element * 3 + 2)
    .value();
}

module.exports = hybrid_operation_to_uneven;

