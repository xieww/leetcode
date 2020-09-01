/**
 * @param {number} N
 * @return {number}
 */
var fib = function (N) {
  if (N <= 1) {
    return N;
  }
  return fib(N - 1) + fib(N - 2);
};

console.log("should be 1", fib(2));
console.log("should be 2", fib(3));
console.log("should be 3", fib(4));
