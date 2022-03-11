/**
 * @param {number} n
 * @return {number}
 */
var fib = function (N) {
  let result = [0, 1];
  for (let i = 2; i <= N; i++) {
    result[i] = (result[i - 1] + result[i - 2]) % 1000000007;
  }
  return result[N];
};

console.log(fib(0));
