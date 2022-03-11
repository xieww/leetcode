/**
 * @param {number} n
 * @param {number[][]} flights
 * @param {number} src
 * @param {number} dst
 * @param {number} k
 * @return {number}
 */
var findCheapestPrice = function (n, flights, src, dst, k) {
  const flightHash = {};
  for (let flight of flights) {
    const [from, to, price] = flight;
    if (flightHash[from] === undefined) {
      flightHash[from] = {};
    }
    flightHash[from][to] = price;
  }

  const pq = [[0, 0, src]];

  while (pq.length != 0) {
    const [price, stop, from] = pq.shift();
    if (stop > k + 1) {
      continue;
    }
    if (from == dst) {
      return price;
    }
    const to = flightHash[from];
    for (let t in to) {
      const costToNext = price + to[t];
      pq.push([costToNext, stop + 1, t]);
    }
    pq.sort((a, b) => a[0] - b[0]);
  }

  return -1;
};

var findCheapestPrice = function (n, flights, src, dst, k) {
  const map = new Map();

  for (let [start, end, cost] of flights) {
    if (map.has(start)) {
      map.get(start).push([end, cost]);
    } else {
      map.set(start, [[end, cost]]);
    }
  }

  const queue = [[0, src, k + 1]];
  const visited = new Map();

  while (queue.length) {
    queue.sort((a, b) => a[0] - b[0]);

    const [cost, city, stops] = queue.shift();
    visited.set(city, stops);

    if (city === dst) {
      return cost;
    }
    if (stops <= 0 || !map.has(city)) {
      continue;
    }

    for (let [nextCity, nextCost] of map.get(city)) {
      if (visited.has(nextCity) && visited.get(nextCity) >= stops - 1) {
        continue;
      }
      queue.push([cost + nextCost, nextCity, stops - 1]);
    }
  }
  return -1;
};

console.log(
  findCheapestPrice(
    3,
    [
      [0, 1, 100],
      [1, 2, 100],
      [0, 2, 500],
    ],
    0,
    2,
    1
  )
);

console.log(
  findCheapestPrice(
    3,
    [
      [0, 1, 100],
      [1, 2, 100],
      [0, 2, 500],
    ],
    0,
    2,
    0
  )
);
