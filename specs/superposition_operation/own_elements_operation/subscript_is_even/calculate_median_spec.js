'use strict';
var calculate_median = require('../../../practices/superposition_operation/own_elements_operation/subscript_is_even/calculate_median.js');

describe('calculate_median_spec',function(){
  var collection_a = [1,2,3,4,5,6];

  it('算中位数',function(){
    var result = calculate_median(collection_a);
    expect(result).toEqual(3.5);
  });
});
