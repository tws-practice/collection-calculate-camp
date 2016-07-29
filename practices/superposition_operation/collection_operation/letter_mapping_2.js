'use strict';

let _ = require('lodash');

function average_to_letter(collection) {

    const mean = Math.ceil(_.mean(collection));
  return String.fromCharCode("a".charCodeAt(0) + mean-1);
}

module.exports = average_to_letter;

