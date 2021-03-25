/**
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */
var compareVersion = function (version1, version2) {
  const arr1 = version1.split(".");
  const arr2 = version2.split(".");
  const length = Math.max(arr1.length, arr2.length);
  for (let i = 0; i < length; i++) {
    const num1 = Number(arr1[i]) || 0;
    const num2 = Number(arr2[i]) || 0;
    if (num1 === num2) {
      continue;
    }
    return num1 > num2 ? 1 : -1;
  }
  return 0;
};

console.log("should be 0", compareVersion("1.01", "1.001"));
console.log("should be 0", compareVersion("1.0", "1.0.0"));
console.log("should be -1", compareVersion("0.1", "1.1"));
console.log("should be 1", compareVersion("1.0.1", "1"));
console.log("should be -1", compareVersion("7.5.2.4", "7.5.3"));
