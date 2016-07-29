'use strict';
var single_element = function(collection){
  let _ = require('lodash');
  //第偶数个元素中，选出不重复的元素
  return   _(collection)
  //   .filter((item,index,items){
  //     return index % 2 === 0
  // })//2,2,6,12



};
module.exports = single_element;
