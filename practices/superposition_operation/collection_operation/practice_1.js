'use strict';
let _ =require("lodash");
function hybrid_operation(collection) {
      let add= _(collection)
        .map((x=>x*3+2))
        .value()

  return _.sum(add);

}

module.exports = hybrid_operation;

