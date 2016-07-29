'use strict';
let _ = require('lodash');
function average_to_letter(collection) {

  return String.fromCharCode("a".charCodeAt(0) +  _.chain(collection)
        .mean().ceil()-1);
}

module.exports = average_to_letter;

