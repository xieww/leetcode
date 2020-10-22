// 第一种
var validPalindrome = (s) => {
  var cut = (s, i) => s.substr(0, i) + s.substr(i + 1);
  var isPalindrome = (s) => s === s.split("").reverse().join("");

  for (let i = 0, stop = s.length / 2; i < stop; i++) {
    let j = s.length - i - 1;
    if (s[i] !== s[j]) {
      return isPalindrome(cut(s, i)) || isPalindrome(cut(s, j));
    }
  }
  return true;
};

// 第二种
var validPalindrome = function (s, corrections = 1) {
  let lo = 0;
  let hi = s.length - 1;

  while (lo < hi) {
    if (s[lo] === s[hi]) {
      lo++;
      hi--;
      continue;
    }

    if (corrections === 0) {
      return false;
    }

    return (
      validPalindrome(s.slice(lo, hi), 0) ||
      validPalindrome(s.slice(lo + 1, hi + 1), 0)
    );
  }

  return true;
};

// 第三种
var validPalindrome = (str, skipped = false) => {
  for (let i = 0, j = str.length - 1; i < j; i++, j--) {
    if (str[i] !== str[j]) {
      if (skipped) return false;
      return (
        validPalindrome(str.substring(i, j), true) ||
        validPalindrome(str.substring(i + 1, j + 1), true)
      );
    }
  }
  return true;
};
