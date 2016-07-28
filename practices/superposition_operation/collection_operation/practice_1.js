'use strict';

let _ = require('lodash');
function hybrid_operation(collection) {
  let tmep =   _(collection)
    .map(n => n * 3 + 2)
    .value();

  return _.sum(tmep);
}

module.exports = hybrid_operation;

