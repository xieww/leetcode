/**
 * BFS
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
var ladderLength = function (beginWord, endWord, wordList) {
  if (wordList.indexOf(endWord) === -1) {
    return 0;
  }

  const set = new Set(wordList);
  let step = 1;
  let q = [beginWord];
  while (q.length) {
    const next = [];
    for (let w of q) {
      if (w === endWord) {
        return step;
      }
      for (let i = 0; i < w.length; i++) {
        for (let j = 0; j < 26; j++) {
          const w2 =
            w.slice(0, i) + String.fromCharCode(97 + j) + w.slice(i + 1); // 97 -> 'a'
          if (set.has(w2)) {
            next.push(w2);
            set.delete(w2);
          }
        }
      }
    }
    q = next;
    step++;
  }

  return 0;
};

// 双端BFS
let ladderLength = function (beginWord, endWord, wordList) {
  let wordListSet = new Set(wordList);
  if (!wordListSet.has(endWord)) {
    return 0;
  }
  let beginSet = new Set();
  beginSet.add(beginWord);
  let endSet = new Set();
  endSet.add(endWord);
  let level = 1;
  // BFS
  while (beginSet.size > 0) {
    let next_beginSet = new Set();
    for (let key of beginSet) {
      for (let i = 0; i < key.length; i++) {
        for (let j = 0; j < 26; j++) {
          let s = String.fromCharCode(97 + j);
          if (s != key[i]) {
            let new_word = key.slice(0, i) + s + key.slice(i + 1);
            if (endSet.has(new_word)) {
              return level + 1;
            }
            if (wordListSet.has(new_word)) {
              next_beginSet.add(new_word);
              wordListSet.delete(new_word);
            }
          }
        }
      }
    }
    beginSet = next_beginSet;
    level++;
    if (beginSet.size > endSet.size) {
      [beginSet, endSet] = [endSet, beginSet];
    }
  }
  return 0;
};

console.log(
  "should be ",
  ladderLength("hit", "cog", ["hot", "dot", "dog", "lot", "log", "cog"])
);
console.log(
  "should be ",
  ladderLength("hit", "cog", ["hot", "dot", "dog", "lot", "log"])
);
