'use strict';
let _ = require('lodash');
function hybrid_operation_to_uneven(collection) {
  return _.chain(collection)
    .filter(n=>n % 2 !== 0)
    .map(n=>n * 3 + 5)
    .sum()
    .value();
}
module.exports = hybrid_operation_to_uneven;

