'use strict';
var calculate_median = require('../../../../practices/superposition_operation/own_elements_operation/subscript_is_even/calculate_median.js');

describe('calculate_median_spec', function() {
  var collection_a = [1, 2, 3, 4, 5, 6];
  var collection_b = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  it('集合中第偶数个元素的个数为奇数时，计算所有第偶数个元素的中位数', function() {
    var result = calculate_median(collection_a);
    expect(result).toEqual(4);
  });

  it('集合中第偶数个元素的个数为偶数时，计算所有第偶数个元素的中位数', function() {
    var result = calculate_median(collection_b);
    expect(result).toEqual(5);
  });
});
