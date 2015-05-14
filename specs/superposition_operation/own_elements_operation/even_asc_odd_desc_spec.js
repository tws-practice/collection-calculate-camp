'use strict';

var even_asc_odd_desc = require('../../../practices/superposition_operation/own_elements_operation/even_asc_odd_desc.js');
describe('even_asc_odd_desc_spec', function() {
  var collection_a = [4, 32, 12, 45, 67, 46, 2, 53, 68, 54, 11];
  var collection_b = [2, 4, 12, 32, 46, 54, 68, 67, 53, 45, 11];

  it('偶数奇数分两头，偶数部分从小到大，奇数部分从大到小', function() {
    var result = even_asc_odd_desc(collection_a);
    expect(result).toEqual(collection_b);
  });
});
