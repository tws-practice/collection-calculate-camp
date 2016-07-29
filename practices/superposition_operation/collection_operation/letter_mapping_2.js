'use strict';
let _ = require('lodash');
function average_to_letter(collection) {

  //在这里写入代码
  let total = _.sum(collection);
  let average = total / (collection.length);
  let averageCode = _.ceil(average);//6
  return String.fromCharCode(averageCode+96);
}

module.exports = average_to_letter;

