# 猜数字大小

```js
var guessNumber = function (n) {
  let left = 0;
  let right = n;
  while (left <= right) {
    let mid = left + Math.floor((right - left) / 2);
    if (guess(mid) == 0) {
      return mid;
    } else if (guess(mid) == 1) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return -1;
};
```

[LeetCode 原题](https://leetcode-cn.com/problems/guess-number-higher-or-lower)
