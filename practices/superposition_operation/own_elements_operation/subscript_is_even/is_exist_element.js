'use strict';
let _=require('lodash');
// var collection_a = [1, 2, 3, 4, 5, 6];

var is_exist_element = function(collection,element){
  let result = _.chain(collection)
    .filter((item)=>collection.indexOf(item)%2==0)
    .indexOf(element)
    .valueOf();
  if (result>=0){
    result = true;
  }else {
    result =false;
  }
  return result;
};
module.exports = is_exist_element;

