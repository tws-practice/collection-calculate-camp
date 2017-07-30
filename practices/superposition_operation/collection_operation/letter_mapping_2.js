'use strict';
let _ = require('lodash');

function average_to_letter(collection) {
  return String.fromCharCode(_.chain(collection)
      .mean()
      .ceil()
     +  96
  );

}

module.exports = average_to_letter;

