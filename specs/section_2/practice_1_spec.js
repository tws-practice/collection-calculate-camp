'use strict';

var count_same_elements = require("../../practices/section_2/practice_1/practice.js");

describe('practice-2-1', function() {

  var collection = [
    "a", "a", "a",
    "e", "e", "e", "e", "e", "e", "e",
    "h", "h", "h", "h", "h", "h", "h", "h", "h", "h", "h",
    "t", "t", "t", "t", "t", "t", "t", "t", "t", "t", "t", "t", "t", "t", "t", "t", "t", "t", "t", "t",
    "f", "f", "f", "f", "f", "f", "f", "f", "f",
    "c", "c", "c", "c", "c", "c", "c", "c",
    "g", "g", "g", "g", "g", "g", "g",
    "b", "b", "b", "b", "b", "b",
    "d", "d", "d", "d", "d"
  ];

  it("把A集合中相同的元素统计出数量", function() {
    var result = count_same_elements(collection);

    expect(result).toEqual([
      {key: "a", count: 3},
      {key: "e", count: 7},
      {key: "h", count: 11},
      {key: "t", count: 20},
      {key: "f", count: 9},
      {key: "c", count: 8},
      {key: "g", count: 7},
      {key: "b", count: 6},
      {key: "d", count: 5}
    ]);
  });
});
