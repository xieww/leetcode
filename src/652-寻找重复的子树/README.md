# 寻找重复的子树

给定一棵二叉树，返回所有重复的子树。对于同一类的重复子树，你只需要返回其中任意一棵的根结点即可。

两棵树重复是指它们具有相同的结构以及相同的结点值。

示例 1：

```text
        1
       / \
      2   3
     /   / \
    4   2   4
       /
      4
```

下面是两个重复的子树：

```text
      2
     /
    4
```

和

```text
    4
```

因此，你需要以列表的形式返回上述重复子树的根结点。

## 思路

- 时间复杂度 O(n)
- 空间复杂度 O(n)

```js
function findDuplicateSubtrees(root) {
  // 存储节点出现次数
  const hash = {};
  // 存储结果
  const result = [];

  const helper = function (node) {
    // 若根节点为空，则返回“#”进行标识
    if (node === null) {
      return "#";
    }
    // 后序遍历
    const left = helper(node.left);
    const right = helper(node.right);
    // 拼接后序遍历后的节点信息
    const subTree = `${left},${right},${node.val}`;
    // 获取哈希表中存储的节点出现次数，若不存在则初始化为0
    const temp = hash[subTree] || 0;
    // 节点信息即使出现多次在结果集中也只存储一次
    if (temp === 1) {
      result.push(node);
    }
    // 更新哈希表中指定节点存储次数
    hash[subTree] = temp + 1;
    return subTree;
  };

  helper(root);
  return result;
}
```

来源：力扣（LeetCode）  
链接：[LeetCode 原题](https://leetcode-cn.com/problems/find-duplicate-subtrees)
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
