/**
 * @param {number} n
 * @return {number}
 */
var totalNQueens = function (n) {
  var p = '', s = 0, l;
  for (var i = 0; i < n; i++) {
      l = '\nfor (var s# = 0; s# < ' + n + '; s#++)';
      for (var j = 0; j < i; j++)
          l += 'if (s# !== s@ && Math.abs(s# - s@) !== (# - @)) '.replace(/@/g, j);
      p += l.replace(/#/g, i);
  }
  p += '\ns++;\ns';
  return eval(p);
};