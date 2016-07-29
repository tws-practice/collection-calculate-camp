'use strict';

var create_updated_collection = require("../../practices/section_3/practice_3/practice.js");

describe('practice-3-3', function() {

  var collection_a = [
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


  var object_b = {value: ["a", "d", "e", "f"]};

  it("统计出A集合中相同的元素的个数，形成C集合，C集合中的元素要形如{key:\"a\", count: 3}，然后选出C集合中的元素的key属性跟B对象中value属性中的元素相同的元素,把他们的count，满3减1，输出减过之后的新C集合", function() {
    var result = create_updated_collection(collection_a, object_b);

    expect(result).toEqual([
      {key: "a", count: 2},
      {key: "e", count: 5},
      {key: "h", count: 11},
      {key: "t", count: 20},
      {key: "f", count: 6},
      {key: "c", count: 8},
      {key: "g", count: 7},
      {key: "b", count: 6},
      {key: "d", count: 4}
    ]);
  });
});
