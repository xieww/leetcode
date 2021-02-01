class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = this.right = null;
  }
}

var generateTrees = function (n) {
  const helper = (n, l = 1, r = n, res = []) => {
    for (let i = l; i <= r; i++) {
      for (const left of helper(n, l, i - 1)) {
        for (const right of helper(n, i + 1, r)) {
          const root = new TreeNode(i);
          root.left = left;
          root.right = right;
          res.push(root);
          // res.push({ val: i, left, right });
        }
      }
    }
    return n ? (res.length ? res : [null]) : [];
  };

  return helper(n);
};

console.log(generateTrees(5));
