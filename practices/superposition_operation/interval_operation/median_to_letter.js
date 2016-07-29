'use strict';
let _ = require('lodash');
function median_to_letter(collection) {
  let num = collection.length % 2 !== 0 ? collection[(collection.length - 1) / 2] :
    _.chain(collection)
      .sortBy()
      .mean([collection[collection.length / 2], collection[collection.length / 2 - 1]])
      .ceil()
      .value();

  let result = [];
  result.push(_.floor(num % 26));

  while (num > 26) {
    num = _.floor(num / 26);
    result.push(_.floor(num % 26));
  }

  return _.chain(result)
    .map((element)=> String.fromCharCode(element + 96))
    .reverse()
    .join("")
    .value();
}

module.exports = median_to_letter;
