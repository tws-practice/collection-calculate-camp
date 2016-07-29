'use strict';
var single_element = function(collection){
  let _ = require('lodash');
  //第偶数个元素中，选出不重复的元素
  return _(collection)
    .filter(n => n%2===0);

};
module.exports = single_element;
