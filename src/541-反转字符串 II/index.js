/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
// var reverseStr = function (s, k) {
//   var result = "";
//   var isReverse = false;
//   for (var i = 0, len = s.length; i < len; i += k) {
//     var str = s.slice(i, i + k);
//     result += isReverse ? str : str.split("").reverse().join("");
//     isReverse = !isReverse;
//   }
//   return result;
// };

// var reverseStr = function (s, k) {
//   const arr = s.split("");
//   if (s.length < k) {
//     return arr.reverse().join("");
//   }

//   for (var i = 0, len = arr.length; i < len; i += 2 * k) {
//     const reverse = arr.splice(i, k).reverse();
//     arr.splice(i, 0, ...reverse);
//   }
//   return arr.join("");
// };

var reverseStr = function (s, k) {
  const arr = s.split("");
  const len = arr.length;
  if (len < k) {
    return arr.reverse().join("");
  }
  let i = 0;
  const swap = (arr, l, r) => {
    while (l < r) {
      const temp = arr[l];
      arr[l++] = arr[r];
      arr[r--] = temp;
    }
  };
  while (i < len) {
    let j = Math.min(i + k - 1, len - 1);
    swap(arr, i, j);
    i += 2 * k;
  }
    return arr.join("");
};

console.log(reverseStr("abcdefg", 2));
console.log(reverseStr("abcd", 2));
