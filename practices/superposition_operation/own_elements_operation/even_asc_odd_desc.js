'use strict';
let _=require('lodash');
var even_asc_odd_desc = function(collection){
  let value = _.chain(collection)
    .filter((item) =>{
      return item%2 ===0;
    })
    .sort()
    .value();
  return value;
}
module.exports = even_asc_odd_desc;
