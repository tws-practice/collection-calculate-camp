'use strict';

function hybrid_operation_to_uneven(collection) {
  return _.chain(collection)
    .filter((element)=> {
      if (element % 2 !== 0) {
        return element;
      }
    })
    .map((element)=> {
      return element * 3 + 2;
    })
    .value();

}

module.exports = hybrid_operation_to_uneven;

