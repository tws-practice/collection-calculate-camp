'use strict';
var single_element = function (collection) {
  return _.chain(collection)
    .filter((element, index)=> {
      if (index % 2 === 1) {
        return element;
      }
    })
    .uniq()
    .value();
};
module.exports = single_element;
