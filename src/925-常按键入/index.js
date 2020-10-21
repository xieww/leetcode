/**
 * @param {string} name
 * @param {string} typed
 * @return {boolean}
 */
var isLongPressedName = function (name, typed) {
  let i = 0;
  let len = name.length;
  for (let j = 0; j < typed.length; j++) {
    if (i < len && name[i] === typed[j]) {
      i++;
    } else if (typed[j] !== typed[j - 1]) {
      return false;
    }
  }
  return i === len;
};

var isLongPressedName = function (name, typed) {
  const n = name.length;
  const m = typed.length;
  let i = 0,
    j = 0;
  while (j < m) {
    if (i < n && name[i] === typed[j]) {
      i++;
      j++;
    } else if (j > 0 && typed[j] === typed[j - 1]) {
      j++;
    } else {
      return false;
    }
  }
  return i === n;
};

console.log("should be true", isLongPressedName("laiden", "laiden"));
console.log("should be true", isLongPressedName("alex", "aaleex"));
console.log("should be false", isLongPressedName("saeed", "ssaaedd"));
console.log("should be true", isLongPressedName("leelee", "lleeelee"));
