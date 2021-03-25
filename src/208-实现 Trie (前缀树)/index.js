/**
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */
/**
 * Initialize your data structure here.
 */
class Trie {
  constructor() {
    this.root = {};
  }

  /**
   * Inserts a word into the trie.
   * @param {string} word
   * @return {void}
   */
  insert(word) {
    let node = this.root;
    for (let c of word) {
      if (node[c] == null) {
        node[c] = {};
      }
      node = node[c];
    }
    node.isWord = true;
  }

  traverse(word) {
    let node = this.root;
    for (let c of word) {
      node = node[c];
      if (node == null) {
        return null;
      }
    }
    return node;
  }

  /**
   * Returns if the word is in the trie.
   * @param {string} word
   * @return {boolean}
   */
  search(word) {
    const node = this.traverse(word);
    return node != null && node.isWord == true;
  }

  /**
   * Returns if there is any word in the trie that starts with the given prefix.
   * @param {string} prefix
   * @return {boolean}
   */
  startsWith(prefix) {
    return this.traverse(prefix) != null;
  }
}

// class Trie {
//   insert(g) {
//     [...g].reduce((p, w) => p[w] || (p[w] = {}), this).$ = true;
//   }
//   search(g, o = this) {
//     for (const w of g) if (!(o = o[w])) return false;
//     return !!o.$;
//   }
//   startsWith(g, o = this) {
//     for (const w of g) if (!(o = o[w])) return false;
//     return true;
//   }
// }

const trie = new Trie();

trie.insert("apple");
console.log(trie.search("apple")); // 返回 true
console.log(trie.search("app")); // 返回 false
console.log(trie.startsWith("app")); // 返回 true
trie.insert("app");
console.log(trie.search("app")); // 返回 true
