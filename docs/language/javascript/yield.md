---
date: 2024-03-28
category:
  - language
tag:
  - JS
---

# yield关键字

`yield` 关键字使生成器函数执行暂停，`yield` 关键字后面的表达式的值返回给生成器的调用者。它可以被认为是一个基于生成器的版本的 `return` 关键字。

`yield` 关键字实际返回一个 `IteratorResult` 对象，它有两个属性，`value` 和 `done`。`value` 属性是对 `yield` 表达式求值的结果，而 `done` 是 `false`，表示生成器函数尚未完全完成。

## 描述

> `yield` 关键字用于暂停和恢复生成器函数。

```js
// 暂停
function *fn1 () {
  yield 1
}
```

## 传参

```js
// rv = yield [expression]
// rv 返回传递给生成器的 next() 方法的可选值，以恢复其执行。
// yield* 委托的行为不包括在内
// 传递参数
function *fn2 (m, n) {
  const args = yield m
  if (args) {
    yield n
  }
}

const g = fn2(10, 20)
g.next() // {value: 10, done: false}
g.next(true) // {value: 20, done: false}
g.next() // {value: undefined, done: true}
```

## 委托

> `yield*` 表达式用于委托给另一个`generator` 或可迭代对象。

```js
// 可迭代对象
function* g1() {
  yield *['tom', 'jack'];
}
// generator
function* g2() {
  yield 'hi'
  yield *g1()
  yield 'welcome'
}

const g = g2()
g.next() // {value: 'hi', done: false}
g.next() // {value: 'tom', done: false}
g.next() // {value: 'jack', done: false}
g.next() // {value: 'welcome', done: false}
g.next() // {value: undefined, done: true}
```

## 返回值

```js
// 正常的返回值会作为next方法调用时value的一部分
//
function* g4() {
  yield* [1, 2, 3];
  return "foo";
}

var result;

function* g5() {
  result = yield* g4();
}

var iterator = g5();

console.log(iterator.next()); // { value: 1, done: false }
console.log(iterator.next()); // { value: 2, done: false }
console.log(iterator.next()); // { value: 3, done: false }
console.log(iterator.next()); // { value: undefined, done: true },
// 此时 g4() 返回了 { value: "foo", done: true }
// 虽然 g4() 有返回值，但yield过程是对g5本身
// 在委托完 g4() 的执行过程后，自己后续没有yield完成执行，所以得到 { value: undefined, done: true }

console.log(result); // "foo"
```

## 场景

```js
// 朝向
const direction = [
  [0, 1],
  [1, 0],
  [0, -1],
  [-1, 0]
]
// 转向
function *turn(target) {
  yield *target
  yield *turn(target)
}

const t = turn(direction)

t.next() // {value: [0, 1], done: false}
t.next() // {value: [1, 0], done: false}
t.next() // {value: [0, -1], done: false}
t.next() // {value: [-1, 0], done: false}
t.next() // {value: [0, 1], done: false}
// ....
```
