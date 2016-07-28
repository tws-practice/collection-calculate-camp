'use strict';
let _=require('lodash');

function average_to_letter(collection) {
  let sum = _.sum(collection);
  let avg = sum/collection.length;
  return String.fromCharCode(_.ceil(avg)+96);

}

module.exports = average_to_letter;

