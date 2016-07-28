'use strict';
let _ = require('lodash');
function amount_even(collection) {
  let uneven =  _(collection)
    .filter(x=>x % 2 === 0)
    .value();
  return _.sum(uneven);
}

module.exports = amount_even;
