'use strict';
let _ = require('lodash');

function even_to_letter(collection) {
  return _(collection).filter(x => x%2 === 0)
                      .map( x =>'a'.charCodeAt()-1 + x )
                      .map(x => String.fromCharCode(x))
                      .value()
}
module.exports = even_to_letter;
