#无重复字符的子串

##思路

- 滑动窗口
- 暴力解法时间复杂度较高，会达到 O(n^2)，故而采取滑动窗口的方法降低时间复杂度
- 定义一个 map 数据结构存储(k, v)，其中key值为字符，value 值为字符位置
- 我们定义不重复子串的开始位置为 left，结束位置为 i
- 随着 i 不断遍历向后，会遇到与 [left, i] 区间内字符相同的情况，此时将字符作为 key 值，获取其 value 值，并更新 left，此时 [left, i] 区间内不存在重复字符
- 无论是否更新 left，都会更新其 map 数据结构和结果 max。
- 时间复杂度：O(n)

[LeetCode 原题](https://leetcode-cn.com/problems/longest-substring-without-repeating-characters)
