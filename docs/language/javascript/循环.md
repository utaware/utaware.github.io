---
date: 2022-06-27
category:
  - language
tag:
  - JS
---

# 循环

## while

```js
var i = 0;
while (i < 10) {
  console.log('i:', i)
  i++
}
```

## do while

> 与while循环类似, 唯一的区别就是先运行一次循环体, 然后判断循环条件。

```js
var i = 0
do {
  console.log('i:', i)
  i++
} while (i < 10)
```

## for

```js
for (var i = 0; i < 10; i++) {
  console.log('i:', i)
}
```

## for in

> 一般用于对象的遍历

::: tip

会遍历包含原型链上所有可遍历的属性

:::

```js
// Object => key
const o = {
  a: 1,
  b: '2',
  fn () {
    console.log(this.a)
  }
}

for (const k in o) {
  console.log(k, o[k])
}

// Array => index
const a = [ 'a', 'b', 'c' ]

for (const i in a) {
  console.log(i, a[i])
}
```

## for of

```js
// for...in 循环不仅遍历数字键名，还会遍历手动添加的其它键， 也会遍历对象的整个原型链
Array.prototype.dy = 'e'

const b = [ 'a', 'b', 'c' ]

b.dx = 'd'

for (const i in b) {
  console.log(i, b[i])
}
// for...of 则不会这样，它只遍历当前对象不会遍历原型链。
for (const v of b) {
  console.log(v)
}
```

::: tip

1. 无论是 for...in 还是 for...of 都不能直接遍历出Symbol类型的值，遍历Symbol类型的值需要用Object.getOwnPropertySymbols()

2. Reflect.ownKeys 方法可以返回所有类型的键名，包括常规键名和Symbol键名

:::

```js
let obj = {
  [Symbol('a')]: 'hello',
  [Symbol('b')]: 'world',
  c: 'es6',
  d: 'dom'
}

let objSymbols = Object.getOwnPropertySymbols(obj) // [Symbol(a), Symbol(b)]

let keyArray = Reflect.ownKeys(obj) // ["c", "d", Symbol(a), Symbol(b)]
```

## for await of

> 以下两种做法可以得到相同的结果, 但不同的地方在于, 第一种做法是因为await等待promise的状态暂停了后续代码块的执行, 已经进入了语句内执行。第二种做法是只有等待遍历中的promise已经变化, 才执行语句内的代码块。

::: code-tabs

@tab await

```js
const timers = [sleep(1000), sleep(0), sleep(2000)]

async function pending () {
  console.time()
  // 1
  // for (let time of timers) {
  //   const t = await time
  //   console.log(t)
  // }
  // 2
  for await (let time of timers) {
    console.log(time)
  }
  console.timeEnd() // 2s+
}
```

@tab sleep

```js
function sleep (time) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(time)
    }, time)
  })
}
```

:::