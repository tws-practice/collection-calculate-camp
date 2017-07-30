'use strict';
let _ = require("lodash");
function median_to_letter(collection) {
    let value = _.chain(collection)
        .sort()
        .filter((item, index, items) => {
            let number = (index + 1) * 2 - items.length;
            return number === 0 || number === 1 || number === 2;
        })
        .sum()
        .value();
    value = _.ceil(value / 2);

    for(let i = value; i < 0;i--){

        let element = _.map(value => value/26);
        if(element > 0){
            return
        }
    }
    // return _(value).map(value => value / 26)
    //     .reverse()
    //     .map(x => "a".charCodeAt(0) + x)
    //     .map(x => String.fromCharCode(x))
    //     .value();
}

module.exports = median_to_letter;
