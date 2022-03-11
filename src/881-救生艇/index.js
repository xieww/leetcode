/**
 * @param {number[]} people
 * @param {number} limit
 * @return {number}
 */
var numRescueBoats = function (people, limit) {
  people.sort((a, b) => b - a);
  let i = 0;
  let j = people.length - 1;
  while (i <= j) {
    if (people[i] + people[j] <= limit) {
      j--;
    }
    i++;
  }
  return i;
};

console.log(numRescueBoats([1, 2], 3));
console.log(numRescueBoats([3, 2, 2, 1], 3));
console.log(numRescueBoats([3, 5, 3, 4], 5));
