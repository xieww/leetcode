/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
// var addStrings = (num1, num2) => {
//   while (num1.length > num2.length) num2 = "0" + num2;
//   while (num1.length < num2.length) num1 = "0" + num1; // 先补0对齐
//   let result = ""; // 结果字符串
//   let carry = 0; // 进位
//   for (let i = num1.length - 1; i >= 0; i--) {
//     // 加法 从右往左做
//     const sum = +num1[i] + +num2[i] + carry; // +号将字符转数字
//     result = (sum % 10) + result; // 模10的结果 + result字符串
//     carry = sum > 9 ? 1 : 0;
//   }
//   return carry === 1 ? "1" + result : result;
// };

// var addStrings = (num1, num2) => {
//   let result = "";
//   let carry = 0;
//   for (
//     let i = num1.length - 1, j = num2.length - 1;
//     i >= 0 || j >= 0;
//     i--, j--
//   ) {
//     const n1 = num1[i] >= 0 ? +num1[i] : 0;
//     const n2 = num2[j] >= 0 ? +num2[j] : 0;
//     const sum = n1 + n2 + carry;
//     result = (sum % 10) + result;
//     carry = (sum / 10) | 0;
//   }
//   carry && (result = "1" + result);
//   return result;
// };

var addStrings = (num1, num2) => {
  const maxLength = Math.max(num1.length, num2.length);
  num1 = num1.padStart(maxLength, 0);
  num2 = num2.padStart(maxLength, 0);
  let sum = "";
  let x = 0;
  let y = 0; // 进位
  for (let i = maxLength - 1; i >= 0; i--) {
    x = parseInt(num1[i]) + parseInt(num2[i]) + y;
    y = Math.floor(x / 10);
    sum = (x % 10) + sum;
  }
  if (y === 1) {
    sum = "1" + sum;
  }
  return sum;
};

console.log("should be 0", addStrings("0", "0"));
console.log("should be 0201", addStrings("0123", "078"));
console.log("should be 10240", addStrings("10240", "0"));
console.log(
  "should be 9419584439332250",
  addStrings("9333852702227987", "85731737104263")
);
console.log("should be 135", addStrings("98", "37"));
