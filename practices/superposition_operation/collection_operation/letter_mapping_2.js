'use strict';
let _ = require("lodash");
function average_to_letter(collection) {
  let sums = _.sum(collection);
  let average = _.ceil(sums/collection.length)-1;
  let con =String.fromCharCode( "a".charCodeAt(0) + average);
  return con;
}

module.exports = average_to_letter;

