'use strict';
let _ = require('lodash');

var is_exist_element = function (collection, element) {
  let array =  _.chain(collection)
    .filter((array,index) => index % 2===0)
    .value();

  for(let i = 0; i < array.length; i++){
    if(array[i] === element){
      var flag = i;
    }
  }

  return _(array).has(flag);
};
module.exports = is_exist_element;
