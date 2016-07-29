'use strict';
let _ = require('lodash');

function average_to_letter(collection) {
  //在这里写入代码
  let average = _.reduce(collection, (sum, n)=> {return sum + n}, 0) / collection.length;
  average = _.ceil(average);
  return String.fromCharCode(average+96);

}
module.exports = average_to_letter;

