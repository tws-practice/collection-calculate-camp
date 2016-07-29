'use strict';
let _ = require("lodash");
function amount_even(collection) {

  let result = _(collection).filter(x =>x%2 === 0).value();
  let sum = _.sum(result);
  return sum;
}

module.exports = amount_even;
