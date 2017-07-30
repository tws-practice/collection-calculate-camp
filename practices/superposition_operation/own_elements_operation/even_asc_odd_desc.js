'use strict';
let _=require('lodash');
var even_asc_odd_desc = function (collection) {
  let arr = _.chain(collection)
    .filter((element)=> {
      if (element % 2 === 0)
        return element;
    })
    .sortBy()
    .value();
  // console.log(arr);
  let Arr = _.chain(collection)
    .filter((element)=> {
      if (element % 2 !== 0)
        return element;
    })
    .sortBy()
    .reverse()
    .value()
  //console.log(Arr);
  let array = _.concat(arr, Arr);
  //console.log(array);
  return array;
};
module.exports = even_asc_odd_desc;
