/**
 * @param {number[][]} clips
 * @param {number} T
 * @return {number}
 */
// var videoStitching = function (clips, T) {
//   const n = clips.length;

//   clips.sort((a, b) => a[0] - b[0]);

//   let stitching_start = 0;
//   let stitching_end = 0;
//   let videos_used = 0;
//   let index = 0;

//   while (stitching_start < T) {
//     while (index < n && clips[index][0] <= stitching_start) {
//       // find the longest video that starts before our stitching_start
//       stitching_end = Math.max(stitching_end, clips[index][1]);
//       index++;
//     }
//     if (stitching_start == stitching_end) return -1; // made no advancement

//     videos_used++;
//     stitching_start = stitching_end;
//   }

//   return videos_used;
// };

var videoStitching = function (clips, T) {
  clips.sort((a, b) => a[0] - b[0]);
  const dp = new Array(T + 1).fill(101);
  dp[0] = 0;
  for (let i = 0; i < clips.length; i++) {
    const [start, end] = clips[i];
    if (dp[start] === 101) {
      break;
    }
    for (let j = start + 1; j <= end; j++) {
      dp[j] = Math.min(dp[j], dp[start] + 1);
    }
  }
  if (dp[T] === 101) {
    return -1;
  }
  return dp[T];
};

console.log(
  "should be 3",
  videoStitching(
    [
      [0, 2],
      [4, 6],
      [8, 10],
      [1, 9],
      [1, 5],
      [5, 9],
    ],
    10
  )
);
console.log(
  "should be -1",
  videoStitching(
    [
      [0, 1],
      [1, 2],
    ],
    5
  )
);
