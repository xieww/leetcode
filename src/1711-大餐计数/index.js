/**
 * @param {number[]} deliciousness
 * @return {number}
 */
var countPairs = function (deliciousness) {
  let m = new Map();
  let ans = 0;
  for (let n of deliciousness) {
    m.set(n, (m.get(n) || 0) + 1); // Push D into a standard frequency map
  }
  // For each [key, value] pair
  for (let [k, v] of m) {
    // Iterate through power sums using bitwise shifts
    for (let i = 1 << 21; i >= 2 * k && i; i >>= 1) {
      if (i === 2 * k) {
        ans += (v * (v - 1)) / 2; // If  k is its own matching number, add pairs to ans
      } else if (m.has(i - k)) {
        ans += m.get(i - k) * v; // Otherwise, add product with matching number freq.
      }
    }
  }

  return ans % 1000000007;
};

// 时间复杂度O(n)，空间复杂度O(n)
var countPairs = function (deliciousness) {
  const mod = 1000000007;
  let m = new Map();
  let ans = 0;
  for (let n of deliciousness) {
    let power = 1;
    for (let i = 0; i < 22; i++) {
      if (m.has(power - n)) {
        ans += m.get(power - n);
        ans %= mod;
      }
      power *= 2;
    }
    m.set(n, (m.get(n) || 0) + 1);
  }
  return ans;
};

console.log(countPairs([1, 3, 5, 7, 9]));
console.log(countPairs([1, 1, 1, 3, 3, 3, 7]));
