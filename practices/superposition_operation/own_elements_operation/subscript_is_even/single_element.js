'use strict';

let _ = require('lodash');

var single_element = function(collection){
  var deleteArray = [];
  let a =  _.chain(collection)
        .filter((array, index) => index % 2 === 0)
        .value();
  let b = _.chain(a => {
    deleteArray.push();
  })
};
module.exports = single_element;
