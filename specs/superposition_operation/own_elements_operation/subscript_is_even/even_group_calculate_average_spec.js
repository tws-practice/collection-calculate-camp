'use strict';
var even_group_calculate_average = require('../../../../practices/superposition_operation/own_elements_operation/subscript_is_even/even_group_calculate_average.js');

describe('even_group_calculate_average', function() {
  var collection_a = [1, 2, 3, 4, 5, 6, 12, 454, 324, 21, 45, 644, 34, 56, 345, 570, 8, 4, 14];
  var collection_b = [1, 3, 5, 7, 33, 55, 31, 555, 777];
  var collection_c = [344, 256, 55, 777, 322, 180];

  it('首先选出所有第偶数个元素，然后选出其中的偶数，按几位数分组，并计算每组的平均数', function() {
    var result = even_group_calculate_average(collection_a);
    expect(result).toEqual([4, 56, 556]);
  });

  it('首先选出所有第偶数个元素，当不含有偶数时', function() {
    var result = even_group_calculate_average(collection_b);
    expect(result).toEqual([0]);
  });

  it('首先选出所有第偶数个元素，然后选出其中的偶数，按几位数分组，当不含有1位，2位的数字，但含有3位的情况时，计算这组的平均数', function() {
    var result = even_group_calculate_average(collection_c);
    expect(result).toEqual([218]);
  });
});
