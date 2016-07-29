'use strict';

var get_letter_interval = require('../../practices/collectionOperator/get_letter_interval_2.js');

describe('get_letter_interval', function () {

  var collection_a = ['t', 'u', 'v', 'w', 'x',
    'y', 'z', 'aa', 'ab', 'ac', 'ad', 'ae', 'af', 'ag',
    'ah', 'ai', 'aj', 'ak', 'al', 'am', 'an', 'ao', 'ap',
    'aq', 'ar', 'as', 'at', 'au', 'av', 'aw', 'ax', 'ay',
    'az', 'ba'
  ];
  var collection_b = ['ba', 'az', 'ay', 'ax', 'aw', 'av', 'au', 'at',
    'as', 'ar', 'aq', 'ap', 'ao', 'an', 'am', 'al', 'ak', 'aj', 'ai',
    'ah', 'ag', 'af', 'ae', 'ad', 'ac', 'ab', 'aa', 'z', 'y', 'x',
    'w', 'v', 'u', 't'
  ];

  it('根据给出的两个数字得到对应自增的字母区间', function() {

    var result = get_letter_interval(20, 53);
    expect(result).toEqual(collection_a);
  });

  it('根据给出的两个数字得到对应自减的字母区间', function() {

    var result = get_letter_interval(53, 20);
    expect(result).toEqual(collection_b);
  });

  it('给定两个相同的数字得到只含此数字对应字母的数组', function() {

    var result = get_letter_interval(28, 28);
    expect(result).toEqual(['ab']);
  });
});
