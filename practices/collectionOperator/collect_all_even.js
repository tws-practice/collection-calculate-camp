'use strict';
const _ = require('lodash');

function collect_all_even(collection) {
  return _.filter(collection,number => {
    if(number % 2 === 0){
      return number;
    }
  });
}

module.exports = collect_all_even;
