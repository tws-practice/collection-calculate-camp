'use strict';
let _=require('lodash');
function average_uneven(collection) {
  return _.chain(collection)
    .filter((element)=> {
      if (element % 2 !== 0) {
        return element;
      }
    })
    .mean((element)=>element)
    .value();
}

module.exports = average_uneven;
