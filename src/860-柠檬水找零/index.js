/**
 * @param {number[]} bills
 * @return {boolean}
 */
// var lemonadeChange = function (bills, n5 = 0, n10 = 0) {
//   return bills.every(
//     (b) => (
//       b === 5
//         ? n5++
//         : b === 10
//         ? (n10++, n5--)
//         : n10
//         ? (n10--, n5--)
//         : (n5 -= 3),
//       n5 >= 0
//     )
//   );
// };

var lemonadeChange = function(bills) {
  var i = -1, n5 = 0, n10 = 0
  while(++i < bills.length) {
      if (bills[i] === 5) {
          n5++
      } else if (bills[i] === 10 && n5 > 0) {
          n5--
          n10++
      } else if (n5 > 0 && n10) {
          n5--
          n10--
      } else if (n5 >= 3){
          n5 -= 3
      } else {
          return false
      }
  }
  return true
};

console.log(lemonadeChange([5, 5, 5, 10, 20]));
