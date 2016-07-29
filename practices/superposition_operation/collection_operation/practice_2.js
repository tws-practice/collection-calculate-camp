'use strict';
let _ = require('lodash');
var collection = [1, 5, 7, 12, 11, 35, 54, 67, 70];
function hybrid_operation_to_uneven(collection) {
  let a = _.chain(collection)
    .filter((element) => {
      if (element % 2 != 0)
        return element;
    })
    .map((element) =>element * 3 + 2)
    .value();
  return a;
}
module.exports = hybrid_operation_to_uneven;
