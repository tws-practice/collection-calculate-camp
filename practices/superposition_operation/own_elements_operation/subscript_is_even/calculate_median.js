'use strict';
let _ = require("lodash");
var calculate_median = function (collection) {
    return _.chain(collection)
        .filter((item, index) => {
            return (index + 1) % 2 === 0;
        })
        .filter((item, index, items) => {
            let number = (index + 1) * 2 - items.length;
            return number === 0 || number === 1 || number === 2;
        })
        .mean()
        .value();
};
module.exports = calculate_median;
