/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
  const arr = s.split(" ");

  for (let i = 0; i < arr.length; i++) {
    const current = arr[i].split("").reverse().join("");
    arr[i] = current;
  }
  return arr.join(" ");
};

console.log(
  "should be 's'teL ekat edoCteeL tsetnoc' ",
  reverseWords("Let's take LeetCode contest")
);
