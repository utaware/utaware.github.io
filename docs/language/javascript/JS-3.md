---
date: 2022-06-28
category:
  - javascript
tag:
  - JS
---

# 变量定义

## 对比

| 区别 | var | let | const | function |
| :-: | :-: | :-: | :-: | :-: |
| 是否有块级作用域 | × | ✔️ | ✔️ | - |
| 是否存在变量提升 | ✔️ | × | × | ✔️ |
| 是否添加全局属性 | ✔️ | × | × | ✔️ |
| 能否重复声明变量 | ✔️ | × | × | ✔️ |
| 是否存在暂时性死区 | × | ✔️ | ✔️ | x |
| 是否必须设置初始值 | × | × | ✔️ | ✔️ |
| 能否改变指针指向 | ✔️ | ✔️ | × | ✔️ |

## 区别

1. 块级作用域

```js
if (true) {
  // let和const具有块级作用域
  let age = '16'
  // var不存在块级作用域
  var name1 = 'tom'

  function fn () {}
} else {
  var name2 = 'jerry'
}

console.log(name1) // tom
console.log(name2) // undefined
console.log(fn) // fn -> 非严格模式&node下, 严格模式下存在块级作用域
console.log(age) // ReferenceError
```

2. 变量提升

```js
// var存在变量提升
console.log(a) // undefined
var a = 'a'
// let和const不存在变量提升
console.log(b) // ReferenceError
let b = 'b'
```

3. 全局添加属性

```js
// var在顶级作用域声明的变量会将该变量添加为全局对象的属性，let和const不会
var a = 'a'
console.log(window.a) // a

function fn () {}
console.log(window.fn) // fn
```

4. 重复声明

```js
// var声明变量时，可以重复声明变量，const和let不允许
var a = 'a1'
var a = 'a2'
console.log(a) // a2
```

5. 暂时性死区

```js
// let、const命令声明变量之前，该变量都是不可用的
// 与var的变量提升相反
console.log(b)
let b = 'b' // ReferenceError
```

6. 初始值设置

```js
// var和let 可以不用设置初始值
// const声明变量必须设置初始值
var a
let b
const c = 'c'
```

7. 指针指向

```js
// const 不允许修改指针指向
const a = { k: 'a' }
a = { k: 'b' } // TypeError
// 但只要不改变引用修改具体的属性不算
a.k = 'b'

// function
function ffn () {}

ffn = 'ffns'

console.log(ffn) // ffns
```
