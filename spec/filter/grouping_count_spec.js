'use strict';

var grouping_count = require("../../practices/filter/grouping_count.js");

describe('grouping_count', function() {

  var collection = [1,1,1,1,2,3,1,3,4,2,3,1,3,4,2];

  it('从collection中计算出每个数的个数', function() {
    var result = grouping_count(collection);

    expect(result).toEqual({'1':6, '2':3, '3':4, '4':2});
  })
});
