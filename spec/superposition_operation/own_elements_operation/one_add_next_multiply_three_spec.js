'use strict';
var one_add_next_multiply_three = require('../../../practices/superposition_operation/own_elements_operation/one_add_next_multiply_three.js');

describe('one_add_next_multiply_three_spec', function() {
  var collection_a = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21];
  var collection_b = [12, 24, 36, 48, 60, 72, 84, 96, 108, 120];

  it('每一个数与下一个数相加，乘以3,最后一个数不算', function() {
    var result = one_add_next_multiply_three(collection_a);
    expect(result).toEqual(collection_b);
  });
});
