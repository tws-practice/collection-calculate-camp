'use strict';
let _ = require('lodash');
var is_exist_element = function(collection,element){
  return _.chain(collection).filter(x => x%2!==0).some(x => x === element).value();
};
module.exports = is_exist_element;
