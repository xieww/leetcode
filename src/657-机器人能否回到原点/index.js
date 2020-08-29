/**
 * @param {string} moves
 * @return {boolean}
 */
// 方法1
// var judgeCircle = function (moves) {
//   const mapping = {
//     U: 1,
//     R: 1,
//     D: -1,
//     L: -1,
//   };

//   // 初始坐标(0,0)
//   let x = 0;
//   let y = 0;
//   for (const item of moves) {
//     if (item === "U" || item === "D") {
//       y = y + mapping[item];
//     } else {
//       x = x + mapping[item];
//     }
//   }
//   return x === 0 && y === 0;
// };

// 方法2
// var judgeCircle = function (moves) {
//   // 设置初始坐标 x=0, y=0
//   let x = 0,
//     y = 0;
//   // 遍历所有移动
//   for (let move of moves) {
//     // 根据移动进行模拟
//     switch (move) {
//       case "R":
//         x++;
//         break;
//       case "L":
//         x--;
//         break;
//       case "U":
//         y++;
//         break;
//       case "D":
//         y--;
//         break;
//     }
//   }
//   // 判断最后回到原点了吗
//   return x == 0 && y == 0;
// };

// 方法3
// const judgeCircle = (moves) => {
//   const pos = [0, 0];
//   // 也可以使用for of进行循环
//   for (let i = 0; i < moves.length; i++) {
//     const move = moves[i];
//     if (move === "U") {
//       // 上
//       pos[0]++;
//     } else if (move === "D") {
//       // 下
//       pos[0]--;
//     } else if (move === "L") {
//       // 左
//       pos[1]--;
//     } else if (move === "R") {
//       // 右
//       pos[1]++;
//     }
//   }
//   return pos[0] === 0 && pos[1] === 0;
// };

// 方法4
// var judgeCircle = function (moves) {
//   // 判断左右移动的次数和上下移动的次数是否相等（即 L.count === R.count && U.count === D.count）
//   return (
//     moves.split("L").length === moves.split("R").length &&
//     moves.split("U").length === moves.split("D").length
//   );
// };

var judgeCircle = (moves) => {
  return (
    moves
      .split("")
      .reduce(
        (p, m) => [
          p[0] + (m === "R") - (m === "L"),
          p[1] + (m === "U") - (m === "D"),
        ],
        [0, 0]
      )
      .join("") === "00"
  );
};

console.log("should be true", judgeCircle("UD"));
console.log("should be false", judgeCircle("LL"));
console.log("should be true", judgeCircle("LURD"));
console.log("should be false", judgeCircle("RD"));
console.log("should be false", judgeCircle("RRRR"));
console.log("should be false", judgeCircle("RRRRLLL"));
console.log("should be true", judgeCircle("RRRRLLLL"));
console.log("should be true", judgeCircle("RDLLUR"));
