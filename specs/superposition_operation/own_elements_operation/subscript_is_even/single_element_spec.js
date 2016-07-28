'use strict';
var single_element = require('../../../../practices/superposition_operation/own_elements_operation/subscript_is_even/single_element.js');

describe('single_element_spec', function() {

  var collection_a = [1, 2, 3, 2, 5, 6, 21, 43, 12, 5];
  var collection_b = [11, 11, 22, 11, 33, 11];

  it('第偶数个元素中，选出不重复的元素', function() {
    var result = single_element(collection_a);
    expect(result).toEqual([6, 43, 5]);
  });

  it('第偶数个元素中，选出不重复的元素', function() {
    var result = single_element(collection_b);
    expect(result).toEqual([]);
  });
});
