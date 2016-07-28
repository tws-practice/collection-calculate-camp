'use strict';
let _ = require('lodash');
function amount_even(collection) {
  return _.chain(collection)
    .remove(n => n % 2 === 0)
    .sum()
    .value();
}

module.exports = amount_even;
