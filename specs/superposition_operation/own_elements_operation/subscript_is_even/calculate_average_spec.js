'use strict';
var calculate_average = require('../../../../practices/superposition_operation/own_elements_operation/subscript_is_even/calculate_average.js');

describe('calculate_average_spec', function() {
  var collection_a = [1, 2, 3, 4, 5, 6];

  it('计算第偶数个元素的平均数', function() {
    var result = calculate_average(collection_a);
    expect(result).toEqual(4);
  });

});
