'use strict';
var even_group_calculate_average = require('../../../../practices/superposition_operation/own_elements_operation/subscript_is_even/even_group_calculate_average.js');

describe('even_group_calculate_average',function(){
  var collection_a = [1,2,3,4,5,6,12,454,324,21,45,644,34,56,345,566,8,4,14];

  it('选出其中的偶数，按几位数分组，并计算每组的平均数',function(){
    var result = even_group_calculate_average(collection_a);
    expect(result).toEqual([4,56,555]);
  });

});
