'use strict';

var double_to_one = require("../../practices/filter/double_dimensional_array_to_one.js");

descirbe('double_to_one', function() {

  var collection = [1, [2], [3, 4]];

  it('把二维数组变成一维数组', function() {

    var result = double_to_one(collection);

    expect(result).toEqual([1, 2, 3, 4]);
  })
});
