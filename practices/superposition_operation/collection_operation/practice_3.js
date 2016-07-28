'use strict';

let _ = require('lodash');
function hybrid_operation_to_uneven(collection) {
  let temp =  _(collection)
    .remove(n => n % 2 === 1)
    .map(n => n * 3 + 5)
    .value();

  return _.sum(temp);
}

module.exports = hybrid_operation_to_uneven;

