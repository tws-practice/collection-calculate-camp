'use strict';
let _ = require("lodash");

function average_to_letter(collection) {
    let total = _.mean(collection);
    let dev = _.ceil(total);
    return String.fromCharCode("a".charCodeAt(0) + dev - 1);
}

module.exports = average_to_letter;

