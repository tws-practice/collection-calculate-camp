'use strict';
let _ = require('lodash');
var is_exist_element = function(collection,element){
  return _(collection)
    .filter((item,index)=>{return index%2 == 0})
    .some(b=>b == element);
};
module.exports = is_exist_element;
