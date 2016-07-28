'use strict';

function even_to_letter(collection) {
  return _.chain(collection)
    .map((element)=> {
      return String.fromCharCode(element + 96);
    })
    .filter((element, index)=> {
      if (index % 2 === 1)
        return element;
    }).value();
}
module.exports = even_to_letter;
