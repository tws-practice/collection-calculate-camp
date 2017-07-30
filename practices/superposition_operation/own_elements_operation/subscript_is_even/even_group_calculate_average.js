'use strict';

let _ = require('lodash');

var even_group_calculate_average = function (collection) {
  let array = [];

  let a = _.chain(collection)
    .filter((array, index) => {
      return (index + 1) % 2 === 0 && array % 2 === 0;
    })
    .sortBy()
    .value();

  if (a.length === 0) {
    return [];
  } else {
    let b = _.chain(a)
      .filter(array => array < 10).value();
    let c = _.chain(a)
      .filter(array => array < 100 && array > 10).value();
    let d = _.chain(a)
      .filter(array => array < 1000 && array > 100).value();

    if (b.length != 0) {
      let f = _.chain(b)
        .filter((array, index, arrays) => {
          var number = index * 2 - arrays.length;
          return number === 0 || number === -1 || number === -2;
        }).value();

      var e = (f.length === 1) ? f[0] : (f[0] + f[1]) / 2;
    }

    if (c.length != 0) {
      let ff = _.chain(c)
        .filter((array, index, arrays) => {
          var number = index * 2 - arrays.length;
          return number === 0 || number === -1 || number === -2;
        }).value();

      var ee = (ff.length === 1) ? ff[0] : (ff[0] + ff[1]) / 2;
    }

    if (d.length != 0) {
      let fff = _.chain(c)
        .filter((array, index, arrays) => {
          var number = index * 2 - arrays.length;
          return number === 0 || number === -1 || number === -2;
        }).value();

      var eee = (fff.length === 1) ? fff[0] : (fff[0] + fff[1]) / 2;
    }

    array.push(e, ee, eee);

    return array;
  }

};
module.exports = even_group_calculate_average;
