/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
/**
 * @description LRU缓存机制
 * @author xieww
 * @date 2021-03-23
 * @class LRUCache
 */
class LRUCache {
  /**
   *Creates an instance of LRUCache.
   * @author xieww
   * @date 2021-03-23
   * @param {*} capacity
   * @memberof LRUCache
   */
  constructor(capacity) {
    this.cache = new Map();
    this.capacity = capacity;
  }

  /**
   * @description
   * @author xieww
   * @date 2021-03-23
   * @param {*} key
   * @returns {number}
   * @memberof LRUCache
   */
  get(key) {
    if (!this.cache.has(key)) {
      return -1;
    }

    const v = this.cache.get(key);
    this.cache.delete(key);
    this.cache.set(key, v);
    return this.cache.get(key);
  }

  /**
   * @description
   * @author xieww
   * @date 2021-03-23
   * @param {*} key
   * @param {*} value
   * @memberof LRUCache
   * @return {void}
   */
  put(key, value) {
    if (this.cache.has(key)) {
      this.cache.delete(key);
    }
    this.cache.set(key, value);
    if (this.cache.size > this.capacity) {
      this.cache.delete(this.cache.keys().next().value);
    }
  }
}

const lRUCache = new LRUCache(2);
lRUCache.put(1, 1); // 缓存是 {1=1}
lRUCache.put(2, 2); // 缓存是 {1=1, 2=2}
console.log(lRUCache.get(1)); // 返回 1
lRUCache.put(3, 3); // 该操作会使得关键字 2 作废，缓存是 {1=1, 3=3}
console.log(lRUCache.get(2)); // 返回 -1 (未找到)
lRUCache.put(4, 4); // 该操作会使得关键字 1 作废，缓存是 {4=4, 3=3}
console.log(lRUCache.get(1)); // 返回 -1 (未找到)
console.log(lRUCache.get(3)); // 返回 3
console.log(lRUCache.get(4)); // 返回 4
