'use strict';
let _ = require('lodash');
var is_exist_element = function (collection, element) {
  return _.chain(collection)
    .filter((x, index)=> {
      if (index % 2 === 0) {
        return x;
      }
    })
    .includes(element)
    .value();
};
module.exports = is_exist_element;
