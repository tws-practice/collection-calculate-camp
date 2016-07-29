'use strict';
let _ = require('lodash')
var even_asc_odd_desc = function (collection) {

  let even = _(collection)
    .filter((item)=> {
      if (item % 2 === 0) {
        return item;
      }
    })
    .value();


  // let odd = _.chain(collection)
  //   .filter((item)=> {
  //     if (item % 2 !== 0) {
  //       return item
  //     }
  //   })
  //   .sortby()
  //   .reverse()
  //   .value();
   return [].push(even)
};

module.exports = even_asc_odd_desc;
