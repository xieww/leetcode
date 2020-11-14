# 数组的相对排序

给你两个数组，arr1 和  arr2，

arr2 中的元素各不相同
arr2 中的每个元素都出现在  arr1  中
对 arr1 中的元素进行排序，使 arr1 中项的相对顺序和  arr2  中的相对顺序相同。未在 arr2 中出现过的元素需要按照升序放在  arr1  的末尾。

示例：

```text
输入：arr1 = [2,3,1,3,2,4,6,7,9,2,19], arr2 = [2,1,4,3,9,6]
输出：[2,2,2,1,4,3,3,9,6,7,19]
```

提示：

```text
1. arr1.length, arr2.length <= 1000
2. 0 <= arr1[i], arr2[i] <= 1000
3. arr2  中的元素  arr2[i]  各不相同
4. arr2 中的每个元素  arr2[i]  都出现在  arr1  中
```

## 思路

```js
var relativeSortArray = function (arr1, arr2) {
  const map = new Map();
  const len = arr2.length;
  arr2.forEach((item, index) => {
    map.set(item, index);
  });

  return arr1.sort((a, b) => {
    a = map.has(a) ? map.get(a) : a + len;
    b = map.has(b) ? map.get(b) : b + len;
    return a - b;
  });
};
```

来源：力扣（LeetCode）  
链接：[LeetCode 原题](https://leetcode-cn.com/problems/relative-sort-array)
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
