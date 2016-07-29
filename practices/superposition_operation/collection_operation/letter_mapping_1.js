'use strict';
let _ = require('lodash');
function even_to_letter(collection) {
  //在这里写入代码
  return _(collection)
    .remove( n =>  n % 2=== 0)
    .map(even =>even +96)
    .map(even => String.fromCharCode(even))
    .value();
}

module.exports = even_to_letter;
