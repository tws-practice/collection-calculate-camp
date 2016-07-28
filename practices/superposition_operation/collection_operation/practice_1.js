'use strict';
let _ = require('lodash')
function hybrid_operation(collection) {
  return _(collection).map(x => x*3+2)
                      .sum()
//  return _.sum(collection.map(x => x*3+2));
}
module.exports = hybrid_operation;

