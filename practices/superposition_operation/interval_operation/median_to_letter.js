'use strict';
let _ = require('lodash');
function median_to_letter(collection) {
  let a =  _.chain(collection)
      .mean().ceil()/26;
  let b =  _.chain(collection)
      .mean().ceil()%26;
  let c = String.fromCharCode("a".charCodeAt() + a-1);
  let d = String.fromCharCode("a".charCodeAt() + b-1);
  return c+d;


}

module.exports = median_to_letter;
