var checkRecord = function (n) {
  const M = 1000000007;
  const PorL = new Array(n + 1); // ending with P or L, no A
  const P = new Array(n + 1); // ending with P, no A
  PorL[0] = P[0] = 1;
  PorL[1] = 2;
  P[1] = 1;

  for (let i = 2; i <= n; i++) {
    P[i] = PorL[i - 1];
    PorL[i] = (P[i] + P[i - 1] + P[i - 2]) % M;
  }

  let res = PorL[n];
  for (let i = 0; i < n; i++) {
    // inserting A into (n-1)-length strings
    const s = (PorL[i] * PorL[n - i - 1]) % M;
    res = (res + s) % M;
  }

  return res;
};

console.log(checkRecord(1));
console.log(checkRecord(2));
