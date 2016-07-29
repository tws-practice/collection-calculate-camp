'use strict';

let _ = require('lodash');
function hybrid_operation_to_uneven(collection) {
  return _(collection)
    .remove(n => n % 2 === 1)
    .map(n => n * 3 + 5)
    .sum();
}

module.exports = hybrid_operation_to_uneven;

