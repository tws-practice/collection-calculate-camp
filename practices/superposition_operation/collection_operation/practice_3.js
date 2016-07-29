'use strict';
let _ = require("lodash");
function hybrid_operation_to_uneven(collection) {

  let result = _(collection).filter(x =>x%2 === 1).map(x => x*3+5).value();
  let sum = _.sum(result);
  return sum;
}

module.exports = hybrid_operation_to_uneven;

