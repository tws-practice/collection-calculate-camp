'use strict';
let _ = require('lodash');
var is_exist_element = function(collection,element){
return _(collection)
  //下标为偶数的元素中，存在3
  .filter((item,index,items) =>{
    return index%2===0
  })
  .some( num => num === element)
};

module.exports = is_exist_element;
