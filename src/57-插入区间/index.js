/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function (intervals, newInterval) {
  if (intervals.length === 0) {
    return [...newInterval];
  }

  const result = [];
  let flag = 0;
  let i;

  for (i = 0; i < intervals.length; i++) {
    const interval = intervals[i];
    if (newInterval[0] > interval[1]) {
      result.push(interval);
    } else if (newInterval[1] < interval[0]) {
      result.push(newInterval);
      flag = 1;
      break;
    } else {
      newInterval[0] = Math.min(newInterval[0], interval[0]);
      newInterval[1] = Math.max(newInterval[1], interval[1]);
    }
  }

  if (flag === 0) {
    result.push(newInterval);
    return result;
  } else {
    return result.concat(intervals.splice(i));
  }
};

// var insert = function (intervals, newInterval) {
//   let result = [];
//   intervals.push(newInterval);
//   let len = intervals.length;
//   if (len === 0) return [];
//   intervals.sort((a, b) => a[0] - b[0]);
//   let i = 0;
//   while (i < len) {
//     let currLeft = intervals[i][0];
//     let currRight = intervals[i][1];
//     while (i < len - 1 && intervals[i + 1][0] <= currRight) {
//       i++;
//       currRight = Math.max(intervals[i][1], currRight);
//     }
//     result.push([currLeft, currRight]);
//     i++;
//   }
//   return result;
// };

console.log(
  "should be ",
  insert(
    [
      [1, 3],
      [6, 9],
    ],
    [2, 5]
  )
);
console.log(
  "should be ",
  insert(
    [
      [1, 2],
      [3, 5],
      [6, 7],
      [8, 10],
      [12, 16],
    ],
    [4, 8]
  )
);
console.log(
  "should be ",
  insert(
    [],
    [4, 8]
  )
);
