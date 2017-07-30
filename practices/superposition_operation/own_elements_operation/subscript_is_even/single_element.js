'use strict';
let _ = require('lodash');
var single_element = function (collection) {
  let value = _.chain(collection)
    .filter((item, index, items) => {
      return index % 2 === 1;
    })
    .value();
  let unduplicate = _.uniq(value);
  let unduplicateSum = _.sum(unduplicate);
  let valuesum = _.sum(value);
  let duplicateNum = (valuesum - unduplicateSum)/(value.length- unduplicate.length);

  return _.without(value,duplicateNum);

}
module.exports = single_element;
