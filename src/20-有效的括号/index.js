/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  let arr = [];
  let len = s.length;
  if (len % 2) return false;
  for (let i = 0; i < len; i++) {
    let letter = s[i];
    switch (letter) {
      case "(": {
        arr.push(letter);
        break;
      }
      case "[": {
        arr.push(letter);
        break;
      }
      case "{": {
        arr.push(letter);
        break;
      }
      case ")": {
        if (arr.pop() !== "(") return false;
        break;
      }
      case "]": {
        if (arr.pop() !== "[") return false;
        break;
      }
      case "}": {
        if (arr.pop() !== "{") return false;
        break;
      }
    }
  }
  return !arr.length;
};

var isValid = function (s) {
  let map = {
    "(": -1,
    ")": 1,
    "[": -2,
    "]": 2,
    "{": -3,
    "}": 3,
  };
  let stack = [];
  for (let i = 0; i < s.length; i++) {
    if (map[s[i]] < 0) {
      stack.push(s[i]);
    } else {
      let last = stack.pop();
      if (map[last] + map[s[i]] != 0) return false;
    }
  }
  if (stack.length > 0) return false;
  return true;
};

var isValid = function (s) {
  while (s.length) {
    var temp = s;
    s = s.replace("()", "");
    s = s.replace("[]", "");
    s = s.replace("{}", "");
    if (s === temp) return false;
  }
  return true;
};

console.log("() is true", isValid("()"));
console.log("()[]{} is true", isValid("()[]{}"));
console.log("(] is false", isValid("(]"));
console.log("([)] is false", isValid("([)]"));
console.log("{[]} is true", isValid("{[]}"));
console.log("{[]}) is false", isValid("{[]})"));
