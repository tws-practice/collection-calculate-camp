'use strict';
let _ = require('lodash');
function even_to_letter(collection) {
  //在这里写入代码
  return _(collection)
    .filter(x => x % 2 == 0)
    .map(x => x - 1)
    .map(x => 'a'.charCodeAt(0) + x)
    .map(x=>String.fromCharCode(x))
    .value();
}
module.exports = even_to_letter;
