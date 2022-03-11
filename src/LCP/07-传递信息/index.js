/**
 * @param {number} n
 * @param {number[][]} relation
 * @param {number} k
 * @return {number}
 */
 var numWays = function(n, relation, k) {
  let dp = new Array(n).fill(0);
  dp[0] = 1;
  for (let i = 0; i < k; i++) {
      const next = new Array(n).fill(0);
      for (const [src, dst] of relation) {
          next[dst] += dp[src];
      }
      dp = next;
  }
  return dp[n - 1];
 };

 console.log("should be 3",numWays(5,[[0,2],[2,1],[3,4],[2,3],[1,4],[2,0],[0,4]],3));
 console.log("should be 0",numWays(3,[[0,2],[2,1]],2));