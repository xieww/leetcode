/**
 * @param {string} s
 * @return {string[]}
 */
var restoreIpAddresses = function (s) {
  let res = [];
  let arr = [];

  let dfs = function (arr, s) {
    let prev = arr[arr.length - 1];
    if (prev > 255) return false;
    if (arr.length < 4 && s == "") return false;
    if (prev && prev.length > 1 && prev[0] == "0") return false; // checks leading 0

    if (arr.length == 3) {
      if (s > 255 || (s.length > 1 && s[0] == "0")) return false;
      else {
        res.push([...arr, s].join("."));
        return true;
      }
    }

    for (let i = 1; i < 4; i++) {
      dfs([...arr, s.slice(0, i)], s.slice(i));
    }
  };

  dfs(arr, s);
  return res;
};

var restoreIpAddresses = function (s) {
  var length = s.length;
  var result = [];
  parse([], 0);
  return result;
  function parse(prefix, idx) {
    if (prefix.length === 4) {
      return idx === length ? result.push(prefix.join(".")) : null;
    }
    for (var i = 1; i <= 3; i++) {
      var token = s.substring(idx, idx + i);
      if (/^(0|[^0]\d*)$/.test(token) && parseInt(token) < 256) {
        var newPrefix = prefix.slice(0);
        newPrefix.push(token);
        parse(newPrefix, idx + i);
      }
    }
  }
};

console.log(
  'should be["1.0.10.23","1.0.102.3","10.1.0.23","10.10.2.3","101.0.2.3"]',
  restoreIpAddresses("101023")
);
