'use strict';

let _ = require('lodash');

function hybrid_operation(collection) {
    return _(collection).map(x => x*3+2).sum();
}

module.exports = hybrid_operation;

