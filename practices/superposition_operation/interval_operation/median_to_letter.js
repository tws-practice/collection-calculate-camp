'use strict';

let _ = require('lodash');

function median_to_letter(collection) {
  //let a = _.sortBy(collection);
  //const l = a.length / 2;
  //let number = (l % 2 !== 0) ? a[l] : _.ceil((a[l - 1] + a[l]) / 2);
  //let str = [];
  //const str1 = String.fromCharCode("a".charCodeAt(0)-1 + _.floor(number / 26));
  //const str2 = String.fromCharCode("a".charCodeAt(0)-1 + number % 26);
  //str.push(str1);
  //str.push(str2);
  //return str;
  let array = _.chain(collection)
    _.sortBy()
    .filter((item,index,items) => {
      var number = index * 2 - items.length;
      return number=== 0 || number === -1 || number === -2;
    }).value();

  const number = (array.length === 1) ? array[0] : _.ceil((array[0] + array[1])/2);

  const str1 = String.fromCharCode("a".charCodeAt(0)-1 + _.floor(number / 26));
  const str2 = String.fromCharCode("a".charCodeAt(0)-1 + number % 26);

  let a = [];
  a.push(str1,str2);
  return _(a).join('');
}

module.exports = median_to_letter;
