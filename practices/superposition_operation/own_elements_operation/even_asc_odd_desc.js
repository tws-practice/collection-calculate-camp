'use strict';
let _ = require("lodash")
var even_asc_odd_desc = function (collection) {

  let even = _.chain(collection)
    .filter((item)=> {
      if (item/2===0)
        return item;
    })
    .sortby()
    .value
  let odd =
  return _.sortBy(collection)
};
module.exports = even_asc_odd_desc;
