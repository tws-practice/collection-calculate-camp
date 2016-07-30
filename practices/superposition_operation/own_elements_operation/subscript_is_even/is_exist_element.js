'use strict';
let _ = require('lodash')
var is_exist_element = function(collection,element){
let result = _(collection).filter(x => collection.indexOf(x)%2 === 0).find(x => x===element);
  if(result !== undefined){
    return true;
  }
  return false;
};
var collection_a = [1, 2, 3, 4, 5, 6];
console.log(is_exist_element(collection_a,3))
module.exports = is_exist_element;
