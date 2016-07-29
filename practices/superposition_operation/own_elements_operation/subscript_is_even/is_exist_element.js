'use strict';
let _=require('lodash');
var is_exist_element = function (collection, element) {
  return _.chain(collection)
    .filter((element, index)=> {
      if (index % 2 === 0)
        return element;
    })
    .includes((element))
    .value();
  //console.log(a);
};
module.exports = is_exist_element;
