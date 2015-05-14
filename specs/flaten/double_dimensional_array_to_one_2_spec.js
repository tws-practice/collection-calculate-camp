'use strict';

var double_to_one = require("../../practices/flaten/double_dimensional_array_to_one_2.js");

describe('double_to_one', function() {

  var collection = [[1, 2, 3], [5, 2, 1, 4], [2, 1]];

  it('消除重复,按照第一次出现的顺序排列最后的输出结果', function() {

    var result = double_to_one(collection);

    expect(result).toEqual([1,2,3,5,4]);
  })
});
