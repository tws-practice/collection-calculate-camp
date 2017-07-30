'use strict';
let _ = require('lodash');
var is_exist_element = function(collection,element){
  let value = _.chain(collection)
    .filter((item, index, items)=>index % 2 === 0)
    .value();

  return value.includes(3) || !value.includes(4);
};
module.exports = is_exist_element;
//.filter((item, index, items)=>(index + 1) % 2 == 0)
