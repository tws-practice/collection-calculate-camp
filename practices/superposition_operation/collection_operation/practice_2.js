'use strict';
let _ =require('lodash')

function hybrid_operation_to_uneven(collection) {
  return _(collection)
    .filter(x =>x % 2 !== 0)
    .map(x=>x*3+2)
    .value();

}

module.exports = hybrid_operation_to_uneven;

