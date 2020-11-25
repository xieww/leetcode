/**
 * @param {string} s
 * @return {string}
 */
var sortString = function (s) {
  const arr = new Array(26).fill(0);
  for (let i = 0; i < s.length; i++) {
    const index = s.charCodeAt(i) - 97;
    arr[index]++;
  }
  const res = new Array(Math.max(...arr)).fill("");
  for (let i = 0; i < 26; i++) {
    for (let j = 0; j < arr[i]; j++) {
      if (j % 2 === 0) {
        res[j] += String.fromCharCode(i + 97);
      } else {
        res[j] = String.fromCharCode(i + 97) + res[j];
      }
    }
  }

  return res.join("");
};

console.log("should be", sortString("aaaabbbbcccc"));
console.log("should be", sortString("rat"));
console.log("should be", sortString("leetcode"));
console.log("should be", sortString("ggggggg"));
console.log("should be", sortString("spo"));
