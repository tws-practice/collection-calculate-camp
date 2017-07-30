'use strict';
let _ =require('lodash');
var even_asc_odd_desc = function(collection){
  let singleNumbers = _(collection)
    .filter((item)=>{return item%2 != 0})
    .sortBy()
    .reverse()
    .value();

  let doubleNumbers = _(collection)
    .filter((item)=>{return item%2 !=1})
    .sortBy()
    .value();

  return _.concat(doubleNumbers,singleNumbers);
};
module.exports = even_asc_odd_desc;
