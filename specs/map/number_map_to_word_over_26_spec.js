'use strict';

var number_map_to_word_over_26 = require('../../practices/map/number_map_to_word_over_26.js');

describe('number_map_to_word_over_26', function() {
  var collection_a = [1, 13, 27, 30, 25, 27];
  var collection_b = ['a', 'm', 'aa', 'ad', 'y', 'aa'];

  it('字母表映射2', function() {
    var result = number_map_to_word_over_26(collection_a);
    expect(result).toEqual(collection_b);
  });
});

