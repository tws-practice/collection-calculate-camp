'use strict';

var choose_no_repeat_number = require("../../practices/filter/choose_no_repeat_number.js");

describe('choose_no_repeat_number', function() {

  var collection = [1, 1, 1, 2, 2, 3, 4];

  it('从collection中选出不重复的数字', function() {

    var result = choose_no_repeat_number(collection);

    expect(result).toEqual([1,2,3,4]);
  })
});
