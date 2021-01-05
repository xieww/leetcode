/**
 * @param {string} s
 * @return {number[][]}
 */
var largeGroupPositions = function (s) {
  const result = [];
  let i = 0;
  let j = 0;
  for (; i < s.length; i = j) {
    while (j < s.length && s.charAt(j) === s.charAt(i)) {
      ++j;
    }
    if (j - i >= 3) {
      result.push([i, j - 1]);
    }
  }
  return result;
};

// 时间复杂度O(n),空间复杂度O(1)
var largeGroupPositions = function (s) {
  let count = 1;
  let startIndex = 0;

  let result = [];
  for (let i = 1; i < s.length; i++) {
    if (s[i] == s[i - 1]) {
      count++;
      if (i == s.length - 1 && count >= 3) {
        result.push([startIndex, startIndex + count - 1]);
      }
    } else if (s[i] != s[i - 1]) {
      if (count >= 3) {
        result.push([startIndex, startIndex + count - 1]);
      }
      count = 1;
      startIndex = i;
    }
  }
  return result;
};

var largeGroupPositions = function (s) {
  const result = [];
  const n = s.length;
  let num = 1;
  for (let i = 0; i < n; i++) {
    if (i === n - 1 || s[i] !== s[i + 1]) {
      if (num >= 3) {
        result.push([i - num + 1, i]);
      }
      num = 1;
    } else {
      num++;
    }
  }
  return result;
};

function largeGroupPositions(s) {
  let regex = /(\w)\1{2,}/g;
  const result = [];
  s.replace(regex, (val, _, y) => {
    result.push([y, y + val.length - 1]);
    return "";
  });
  return result;
}

console.log("[[3,6]]", largeGroupPositions("abbxxxxzzy"));
console.log("[]", largeGroupPositions("abc"));
console.log("[[3,5],[6,9],[12,14]]", largeGroupPositions("abcdddeeeeaabbbcd"));
console.log("[]", largeGroupPositions("aba"));
