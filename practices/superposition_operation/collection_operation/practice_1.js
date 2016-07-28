'use strict';
let _=require('lodash');
function hybrid_operation(collection) {
  return _
    .chain(collection)
    .map(n=>n*3)
    .map(n=>n+2)
    .reduce((result,n)=>result+n)
    .value();
}

module.exports = hybrid_operation;

