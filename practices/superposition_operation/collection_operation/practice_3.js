'use strict';
let _ =require("lodash");
function hybrid_operation_to_uneven(collection) {
let add =_(collection)
  .filter(x=>x%2!==0)
  .map(x=>x*3+5)
  .value();
  return _.sum(add);
}

module.exports = hybrid_operation_to_uneven;

