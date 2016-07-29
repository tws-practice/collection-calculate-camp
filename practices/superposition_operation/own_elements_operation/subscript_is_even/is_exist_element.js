'use strict';
let _ = require('lodash')
var is_exist_element = function (collection, element) {
  let a = _(collection)
    .filter((item, index)=> {
      if (index % 2 === 0) {
        return item
      }
    })
    .value();

  if(a.includes(element)){
      return true;
  }
  if(!a.includes(element)){
    return false;
  }
};
module.exports = is_exist_element;
