'use strict';
let _ = require("lodash");
var is_exist_element = function (collection, element) {
  let result = _.chain(collection)
    .filter(item=>collection.indexOf(item) % 2 === 0)
    .indexOf(element)
    .value();
  if (result >= 0) {
    return true;
  }
  else {
    return false
  }
};
module.exports = is_exist_element;
