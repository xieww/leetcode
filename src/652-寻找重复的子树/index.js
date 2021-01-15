function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

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

const root = {
  val: 1,
  left: { val: 2, left: { val: 4, left: null, right: null }, right: null },
  right: {
    val: 3,
    left: {
      val: 2,
      left: { val: 4, left: null, right: null },
      right: null,
    },
    right: { val: 4, left: null, right: null },
  },
};

const tree = [1, 2, 3, 4, null, 2, 4, null, null, 4];

console.log(findDuplicateSubtrees(root));
