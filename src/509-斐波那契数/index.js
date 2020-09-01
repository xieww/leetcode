/**
 * @param {number} N
 * @return {number}
 */
// 方法1（暴力递归）
// var fib = function (N) {
//   if (N <= 1) {
//     return N;
//   }
//   return fib(N - 1) + fib(N - 2);
// };

// 方法2（动态规划）
var fib = function (N) {
  let result = [0, 1];
  for (let i = 2; i <= N; i++) {
    result[i] = result[i - 1] + result[i - 2];
  }
  return result[N];
};

// 方法3（动态规划）
// var fib = function (N) {
//   if (N <= 1) {
//     return N;
//   }
//   let prev = 0;
//   let sum = 1;
//   for (let i = 2; i <= N; i++) {
//     sum += prev;
//     prev = sum - prev;
//   }
//   return sum;
// };

// 方法4（动态规划）
// var fib = function (N) {
//   if (N <= 1) return N;

//   let prev = 0;
//   let sum = 1;

//   for (let i = 2; i <= N; i += 1) {
//     [prev, sum] = [sum, prev + sum];
//   }

//   return sum;
// };

console.log("should be 0", fib(0));
console.log("should be 1", fib(1));
console.log("should be 1", fib(2));
console.log("should be 2", fib(3));
console.log("should be 3", fib(4));
