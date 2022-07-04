---
date: 2022-06-26
category:
  - javascript
tag:
  - JS
---

# 运算符

## 短路运算符

```js
const o = {
  name: 'tom',
  say () {
    console.log(this.name)
  }
}
// 或
const a = o.name || 'jerry'
// 并
o.name && o.name()
```

## 指数运算符

```js
// ES7 中引入指数运算符「 ** 」，用来实现幂运算，功能与 Math.pow 结果相同
console.log(2 ** 10) // 1024 Math.pow(2, 10)
```

## 逻辑赋值操作符

```js
const o = {
  name: 'tom',
  count: 0
}
// 判断默认值时区分左边的false值
// 例如o.selfCount = o.count ?? 10 => o.count为0值等一样会取到10
// includes null, undefined, not other empty value
// o.selfCount = o.selfCount ?? 10
o.selfCount = o.count ?? 10
// o.name = o.name || 'jerry'
o.name ||= 'jerry'
// o.count = o.count && 10
o.count &&= 10

console.log(o) // {name: 'tom', count: 10}
```

## Spread & Rest

```js
// spread 解构
const a = [1, 2, 3]

const b = [ ...a, 4 ]
// rest 扩展
const [ 1, ...c ] = b
```

## 可选链操作符

```js
// 在对象层级较深时，不用做层级判断的简便写法
const o = {}

console.log(o?.name?.say)
```
