'use strict';
let _ = require("lodash");
var calculate_median = function (collection) {
  let middle = 0;
  let temps = _.chain(collection)
    .filter((item, index, items)=> {
      if (index % 2 != 0)
        return item;
    })
    .sort()
    .filter((item, index, items)=> {
      var number = index * 2 - items.length;
      return number === 0 || number === -1 | number === -2;
    })
    .value();
  if (temps.length > 1) {
    middle = _.ceil(_.sum(temps) / 2);
  } else {
    middle = temps[0];
  }
  return middle;
};
console.log(calculate_median);
module.exports = calculate_median;
