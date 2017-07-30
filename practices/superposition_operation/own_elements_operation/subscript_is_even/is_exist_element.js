'use strict';
let _=require('lodash');
var is_exist_element = function(collection,element){
  let result = _.chain(collection)
    .sort()
    .filter((element,index)=>index%2===0)
    .includes(element)
    .value();
  return result;
};
module.exports = is_exist_element;
