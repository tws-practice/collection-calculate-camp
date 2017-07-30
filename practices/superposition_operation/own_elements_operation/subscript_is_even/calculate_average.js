'use strict';
let _ = require("lodash");
var calculate_average = function(collection){
    return _.chain(collection)
    .filter((collection,(item,index) => {
        return (index + 1) %2 === 0;
    }))
    .mean()
    .value();


};
module.exports = calculate_average;
