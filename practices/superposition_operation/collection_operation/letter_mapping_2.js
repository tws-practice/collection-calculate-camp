'use strict';
let _ = require("lodash");
function average_to_letter(collection) {
  return String.fromCharCode(
    _.chain(collection)
      .mean()
      .ceil()
      .value()+96);
}
module.exports = average_to_letter;

