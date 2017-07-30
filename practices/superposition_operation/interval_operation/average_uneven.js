'use strict';
let _ = require('lodash')
function average_uneven(collection) {
  return _.chain(collection).filter(x => x%2 !== 0).mean().value();
}
module.exports = average_uneven;
