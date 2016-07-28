'use strict';

var median_to_letter = require("../../../practices/superposition_operation/interval_operation/median_to_letter.js");

describe('median_to_letter', function() {

  var collection = [20,21,22,23,24,25,26,27,28,29,
                    30,31,32,33,34,35,36,37,38,39,
                    40,41,42,43,44,45,46,47,48,49,
                    50,51,52,53];

  it('(20,53)的中位数(如果是小数上取整)对应的字母', function() {

    var result = median_to_letter(collection);

    expect(result).toEqual('ak');
  })
});
