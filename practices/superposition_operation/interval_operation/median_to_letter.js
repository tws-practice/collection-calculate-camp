'use strict';

let _ = require('lodash');

function median_to_letter(collection) {
  let value = _.chain(collection)
    .sort()
    .value();

  let index = _.floor(value.length / 2);
  let middle = value.length % 2 === 0 ? _.ceil((value[index] + value[index - 1]) / 2 ) : value[index];

  let p = [];
  while (middle > 26) {
    middle--;
    p.push(1 + middle % 26);
    middle /= 26;
  }
  p.push(middle);

  return _(p)
    .map(n => String.fromCharCode(n+96))
    .reverse()
    .join('');
}

module.exports = median_to_letter;

