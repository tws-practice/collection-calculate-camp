'use strict';
let _ = require('lodash');
function hybrid_operation(collection) {
  let result = _(collection)
    .map(x => x * 3)
    .map(x=> x + 2)
    .value();
  return _.sum(result);
}

module.exports = hybrid_operation;

