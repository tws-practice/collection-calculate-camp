'use strict';
let _=require('lodash');
var even_asc_odd_desc = function (collection) {
  let even = _.chain(collection)
    .filter((element)=> element % 2 === 0)
    .sortBy()
    .value();

  let odd = _.chain(collection)
    .filter((element)=> element % 2 === 1)
    .sortBy()
    .reverse()
    .value();
  return _.concat(even, odd);
};
module.exports = even_asc_odd_desc;
