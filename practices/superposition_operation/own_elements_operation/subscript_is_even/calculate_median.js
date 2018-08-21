'use strict';
let _ = require('lodash');
var collection_a = [1, 2, 3, 4, 5, 6];
var collection_b = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var calculate_median = function (collection) {
  let middle = 0;
  let temps = _.chain(collection)
    .filter((item, index, items) => {
      if (index % 2 !== 0)
        return item;
    })
    .sort()
    .filter((item, index, items)=> {
      let number = index * 2 - items.length;
      return number === 0 || number === -1 | number === -2;
    })
    .value();
  if (temps.length > 1) {
    middle = _.ceil(_.sum(a) / 2);
  } else {
    middle = temps[0];
  }

  /* return middle;*/
};


module.exports = calculate_median;
