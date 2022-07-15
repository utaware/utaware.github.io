---
date: 2022-06-20
category:
  - language
tag:
  - ES
---

# ES7新增特性

## Array.prototype.includes()

> includes() 函数用来判断一个数组是否包含一个指定的值，如果包含则返回 true，否则返回 false。includes 函数与 indexOf 函数很相似

```js
Array.prototype.includes = function (searchElement, fromIndex = 0) {
  return this.indexOf(x) >= fromIndex
}
```

## Exponentiation Operator(求幂运算符)

```js
let a = 2 ** 3

function calcExponent (a, b) {
  return Math.pow(2, 3)
}

console.log(a === calcExponent(2, 3)) // true
```
