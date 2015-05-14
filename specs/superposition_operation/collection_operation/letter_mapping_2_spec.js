'use strict';

var average_to_letter = require("../../../practices/superposition_operation/collection_operation/letter_mapping_2.js");

describe('average_to_letter', function() {

  var collection = [1,2,3,4,5,6,7,8,9,10];

  it('数组的平均数（如果是小数上取整）映射为字母', function() {

    var result = average_to_letter(collection);

    expect(result).toEqual('f');
  })
});
