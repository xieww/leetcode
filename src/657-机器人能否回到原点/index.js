/**
 * @param {string} moves
 * @return {boolean}
 */
var judgeCircle = function (moves) {
  const moveList = moves.split("");
  const mapping = {
    U: 1,
    R: 1,
    D: -1,
    L: -1,
  };
  let coordinate = {
    x: 0,
    y: 0,
  };
  for (const item of moveList) {
    if (item === "U" || item === "D") {
      coordinate.y = coordinate.y + mapping[item];
    } else {
      coordinate.x = coordinate.x + mapping[item];
    }
  }
  if (coordinate.x || coordinate.y) {
    return false;
  }
  return true;
};

console.log("should be true", judgeCircle("UD"));
console.log("should be false", judgeCircle("LL"));
console.log("should be true", judgeCircle("LURD"));
console.log("should be false", judgeCircle("RD"));
console.log("should be false", judgeCircle("RRRR"));
console.log("should be false", judgeCircle("RRRRLLL"));
console.log("should be true", judgeCircle("RRRRLLLL"));
console.log("should be true", judgeCircle("RDLLUR"));
