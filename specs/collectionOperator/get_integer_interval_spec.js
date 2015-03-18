'use strict';

var get_integer_interval = require('../../practices/reduce/get_integer_interval_spec.js');

describe('get_integer_interval', function () {

  var min = 1;
  var max = 5;
  var collection = [1, 2, 3, 4, 5];

  it('选出给定数字集合元素的最大值', function() {

    var result = get_integer_interval(min, max);
    expect(result).toEqual(collection);
  });
});
