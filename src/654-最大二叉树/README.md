# 最大二叉树

给定一个不含重复元素的整数数组 nums 。一个以此数组直接递归构建的 最大二叉树 定义如下：

- 二叉树的根是数组 nums 中的最大元素。
- 左子树是通过数组中 最大值左边部分 递归构造出的最大二叉树。
- 右子树是通过数组中 最大值右边部分 递归构造出的最大二叉树。

返回有给定数组 nums 构建的 最大二叉树 。

示例 1：

![图例 1](./tree1.jpg)

```text
输入：nums = [3,2,1,6,0,5]
输出：[6,3,5,null,2,0,null,null,1]
解释：递归调用如下所示：

- [3,2,1,6,0,5] 中的最大值是 6 ，左边部分是 [3,2,1] ，右边部分是 [0,5] 。
   - [3,2,1] 中的最大值是 3 ，左边部分是 [] ，右边部分是 [2,1] 。
      - 空数组，无子节点。
         - [2,1] 中的最大值是 2 ，左边部分是 [] ，右边部分是 [1] 。
            - 空数组，无子节点。
               - 只有一个元素，所以子节点是一个值为 1 的节点。
         - [0,5] 中的最大值是 5 ，左边部分是 [0] ，右边部分是 [] 。
            - 只有一个元素，所以子节点是一个值为 0 的节点。
               - 空数组，无子节点。
```

示例 2：

![图例 1](./tree2.jpg)

```text
输入：nums = [3,2,1]
输出：[3,null,2,null,1]
```

提示：

1. 1 <= nums.length <= 1000
2. 0 <= nums[i] <= 1000
3. nums 中的所有整数 互不相同

## 思路

* 若数组不存在或者为空直接返回null
* 找出当前数组中最大值，然后以最大值为根节点，分别以最大值左边子数组为左子树，最大值右边子数组为右子树进行递归调用

```js
function constructMaximumBinaryTree(nums) {
  if (nums.length == 0) {
    return null;
  }
  var maxValue = Math.max(...nums);
  var root = new TreeNode(maxValue);
  root.left = constructMaximumBinaryTree(nums.slice(0, nums.indexOf(maxValue)));
  root.right = constructMaximumBinaryTree(
    nums.slice(nums.indexOf(maxValue) + 1)
  );
  return root;
}
```

来源：力扣（LeetCode）  
链接：[LeetCode 原题](https://leetcode-cn.com/problems/maximum-binary-tree)
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
