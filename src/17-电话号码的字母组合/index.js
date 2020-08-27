/**
 * @param {string} digits
 * @return {string[]}
 */
// var letterCombinations = function (digits) {
//   if (digits.length == 0) return [];
//   const result = [];
//   const map = {
//     2: "abc",
//     3: "def",
//     4: "ghi",
//     5: "jkl",
//     6: "mno",
//     7: "pqrs",
//     8: "tuv",
//     9: "wxyz",
//   };
//   const generate = (curStr, i) => {
//     // curStr是当前字符串，i是扫描的指针
//     if (i > digits.length - 1) {
//       // 指针越界，递归的出口
//       result.push(curStr); // 将解推入result
//       return; // 结束当前递归分支，进入另一个递归分支
//     }
//     const letters = map[digits[i]]; // 当前数字对应有哪些字母
//     for (const l of letters) {
//       // 不同的字母选择代表不同的递归分支
//       generate(curStr + l, i + 1); // 生成新字符串，i指针右移，递归
//     }
//   };
//   generate("", 0); // 递归的入口，初始字符串为''，指针为0
//   return result;
// };

const letterCombinations = (digits) => {
  if (digits.length == 0) return [];
  const map = {
    '2': 'abc',
    '3': 'def',
    '4': 'ghi',
    '5': 'jkl',
    '6': 'mno',
    '7': 'pqrs',
    '8': 'tuv',
    '9': 'wxyz'
  };
  const queue = [];
  queue.push('');
  for (let i = 0; i < digits.length; i++) { // bfs的层数，即digits的长度
    const levelSize = queue.length;         // 当前层的节点个数
    for (let j = 0; j < levelSize; j++) {   // 逐个让当前层的节点出列
      const curStr = queue.shift();         // 出列
      const letters = map[digits[i]];       
      for (const l of letters) {
        queue.push(curStr + l); // 生成新的字母串入列
      }
    }
  }
  return queue; // 队列中全是最后一层生成的字母串
};

console.log(letterCombinations("62"));
console.log(letterCombinations("529"));
