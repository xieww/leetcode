/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  const map = {};
  s.split("").map((c) => (map[c] = map[c] ? map[c] + 1 : 1));
  t.split("").map((c) => (map[c] = map[c] ? map[c] - 1 : -1));
  return Object.keys(map).every((k) => map[k] === 0);
};

// 时间复杂度O(nlogn)，空间复杂度O(logn)
var isAnagram = function (s, t) {
  return (
    s.length === t.length && [...s].sort().join("") === [...t].sort().join("")
  );
};

console.log("should be true", isAnagram("anagram", "nagaram"));
console.log("should be true", isAnagram("rat", "car"));
