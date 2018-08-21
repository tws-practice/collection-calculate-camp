'use strict';
let _ = require("lodash");
function average_to_letter(collection) {
  return _.chain(collection)
      .mean()
      .ceil()
      .value() + 96;
}
module.exports = average_to_letter;
