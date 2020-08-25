# 旋转数组

## 方法 1

### 思路

### 思路

- 时间复杂度 O(1)
- 空间复杂度 O(1)

```js
var rotate = function (nums, k) {
  if (!nums || nums.length <= 1) {
    return nums;
  }
  const arr = nums.splice(nums.length - k);
  nums.splice(0, 0, ...arr);
  return nums;
};
```

## 方法 2

### 思路

- 时间复杂度 O(1)
- 空间复杂度 O(1)

```js
var rotate = function (nums, k) {
  if (!nums || nums.length <= 1) {
    return nums;
  }
  const arr = nums.splice(nums.length - k);
  nums.unshift(...arr);
  return nums;
};
```

## 方法 3

### 思路

- 时间复杂度 O(1)
- 空间复杂度 O(1)

```js
var rotate = function (nums, k) {
  if (!nums || nums.length <= 1) {
    return nums;
  }
  const arr = nums.splice(0, nums.length - k);
  nums.push(...arr);
  return nums;
};
```

## 方法 4

### 思路

- 时间复杂度 O(k),n 为数组长度
- 空间复杂度 O(1)

```js
var rotate = function (nums, k) {
  if (!nums || nums.length <= 1) {
    return nums;
  }
  for (let i = 0; i < k; i++) {
    nums.unshift(nums.pop());
  }
  return nums;
};
```

## 方法 5

### 思路

- 时间复杂度 O(n-k),n 为数组长度
- 空间复杂度 O(1)

```js
var rotate = function (nums, k) {
  if (!nums || nums.length <= 1) {
    return nums;
  }
  for (let i = 0; i < nums.length - k; i++) {
    nums.push(nums.shift());
  }
  return nums;
};
```

## 方法 6

### 思路

- 时间复杂度 O(n\*k),n 为数组长度
- 空间复杂度 O(1)

```js
var rotate = function (nums, k) {
  if (!nums || nums.length <= 1) {
    return nums;
  }
  for (let i = 0; i < k; i++) {
    let prev = nums[nums.length - 1];
    for (let j = 0; j < nums.length; j++) {
      let temp = nums[j];
      nums[j] = prev;
      prev = temp;
    }
  }
  return nums;
```

[LeetCode 原题](https://leetcode-cn.com/problems/rotate-array/)
