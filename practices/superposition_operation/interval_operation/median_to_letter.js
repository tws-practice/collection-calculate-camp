'use strict';

let _ = require('lodash');

function _toCharNumber(charCode) {
  // TODO
  return 0;
}

function median_to_letter(collection) {
  let median = _.chain(collection)
    .sortBy()
    .filter((item, index, all) => {
      if(all.length%2===1) {
        return index === (all.length-1)/2;
      } else {
        let expected = [all.length/2, all.length/2+1]
        return expected.includes(index);
      }
    });
  return _toCharNumber(median);
}

module.exports = median_to_letter;
