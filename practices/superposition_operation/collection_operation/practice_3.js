'use strict';
let _=require('lodash');
function hybrid_operation_to_uneven(collection) {
  let addthree = _(collection)
    .filter(x=>x%2===1)
    .map(x=>x*3)
    .map(x=>x+5)
    .value();
  return _.sum(addthree);
}

module.exports = hybrid_operation_to_uneven;
