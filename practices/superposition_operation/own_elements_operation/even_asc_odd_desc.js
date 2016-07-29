'use strict';
let _ = require('lodash');
var even_asc_odd_desc = function (collection) {
  let evenArray = _.chain(collection)
    .remove(n => n % 2 === 0)
    .sort()
    .value();

  let oddArray = _.chain(collection)
    .sort()
    .reverse()
    .value();

  return (evenArray.split('') + oddArray.split('')).join('');
};
module.exports = even_asc_odd_desc;
