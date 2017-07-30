'use strict';
let _ = require('lodash');

var calculate_average = function(collection){
     return _.chain(collection)
    .filter((array, index) => {
      return (index+1) % 2 === 0;
    })
    .mean()
    .ceil()
    .value();
};
module.exports = calculate_average;
