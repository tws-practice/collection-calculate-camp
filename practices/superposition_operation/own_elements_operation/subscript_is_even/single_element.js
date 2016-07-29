'use strict';
let _ = require('lodash');
var single_element = function (collection) {
  let i = 0;
  let result = [];
  let doubleIndex = _(collection)
    .filter((item, index, items)=>(index + 1) % 2 == 0)
    .value();

  for(let item of doubleIndex){
    doubleIndex.some(temp=>{
      if(item == temp){
        i++;
      }});
    if(i == 1){
      result.push(item);
    }
    i = 0;
  }
  return result;
};
module.exports = single_element;
