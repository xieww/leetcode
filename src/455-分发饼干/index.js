/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function (g, s) {
  let result = 0;
  if (!g || g.length === 0 || !s || s.length === 0) {
    return result;
  }
  g.sort((a, b) => a - b);
  s.sort((a, b) => a - b);

  let i = 0;
  let j = 0;

  while (i < g.length && j < s.length) {
    const child = g[i];
    const cookie = s[j];

    if (cookie >= child) {
      result++;
      i++;
    }
    j++;
  }

  return result;
};

console.log("should be 1", findContentChildren([1, 2, 3], [1, 1]));
console.log("should be 2", findContentChildren([1, 2], [1, 2, 3]));
console.log("should be 2", findContentChildren([1, 5, 3], [1, 2, 3]));
