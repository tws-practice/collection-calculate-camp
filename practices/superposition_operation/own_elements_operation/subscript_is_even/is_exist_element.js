'use strict';
let _ = require('lodash')
var is_exist_element = function (collection, element) {
  let a = _.chain(collection)
    .filter((item, index)=>index % 2 === 0)
    .value();

  if(a.includes(element)){
      return true;
  }
  if(!a.includes(element)){
    return false;
  }
};
module.exports = is_exist_element;
