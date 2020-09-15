'use strict';
let _ = require("lodash");
function hybrid_operation(collection) {

  let n = _(collection).map(x =>x*3+2).value();
  let sum = _.sum(n);
  return sum;
}

module.exports = hybrid_operation;

