'use strict';
let _=require('lodash');
function amount_even(collection) {
   return _
     .chain(collection)
     .filter(function (n) {
       return n%2===0;
     })
     .reduce(function (result,n) {
       return result+n;
     })
     .value();
}

module.exports = amount_even;
