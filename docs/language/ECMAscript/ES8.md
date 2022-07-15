---
date: 2022-06-21
category:
  - language
tag:
  - ES
---

# ES8新增特性

## Async/Await 异步函数

> 使得异步改同步成为可能，避免代码书写的来回嵌套

```js
// promise
function requestAll () {
  fetch()
    .then(() => {
    // todo ...
  }).then(() => {
    // todo ...
  }).then(() => {
    // todo ...
  }).catch((error) => {
    console.log(error)
  })
}
// async
async function requestAllAsync () {
  const res1 = await fetch()
  const res2 = await fetch()
  const res3 = await fetch().catch()
}

// 错误处理
async function requestAllAsyncError () {
  // 内部捕获
  try {
    // 单个
    const res1 = await fetch().catch()
    const res2 = await fetch().catch()
    const res3 = await fetch().catch()
    return [res1, res2, res3]
  } catch (error) {
    console.log(error)
  }
}
// 外部捕获
requestAllAsyncError().then().catch()
```

## Object.values()

> 返回对象自身的(不含继承的)所有可遍历(enumerable)属性的键名

::: tip

ES5: Object.keys()

:::

```js
const o1 = {
  a: 1,
  b: 2,
  c: 3
}
// 如果属性名为数值的属性，是按照数值大小，从小到大遍历的
const o2 = {
  100: 'a',
  2: 'b',
  7: 'c'
}
// Object.values()
const values = Object.values(o1) // [1, 2, 3]
const entries = Object.values(o2) // ['b', 'c', 'a']
```

## Object.entries()

> 返回对象自身的(不含继承的)所有可遍历(enumerable)属性的键值对数组

```js
const obj = { foo: 'bar', baz: 42 };
Object.entries(obj) // [ ["foo", "bar"], ["baz", 42] ]
const obj = { 10: 'xxx', 1: 'yyy', 3: 'zzz' };
Object.entries(obj); // [['1', 'yyy'], ['3', 'zzz'], ['10': 'xxx']]
```

## Object.getOwnPropertyDescriptors()

> 返回某个对象属性的描述对象(descriptor)

::: tip

ES5: Object.getOwnPropertyDescriptor()

:::

```js
// 拷贝get属性和set属性的问题
const source = {
  set foo (value) {
    console.log(value)
  },
  get bar () {
    return 'bar'
  }
}
const r1 = Object.assign({}, source)

const r2 = Object.defineProperties({}, Object.getOwnPropertyDescriptors(source))

console.dir(r1) // { foo: undefined, bar: 'bar' }
console.dir(r2) // { foo: [Setter], bar: [Getter] }
```

## String padding

* `String.padStart(targetLength, [padString])`
* `String.padEnd(targetLength, [padString])`

```js
// 使用
'x'.padStart(4) // '    x'
'x'.padStart(4, 'ab') // 'abax'
'x'.padEnd(5, 'ab') // 'xabab'
// 处理日期、金额的时候格式化
'12'.padStart(10, 'YYYY-MM-DD') // "YYYY-MM-12"
'09-12'.padStart(10, 'YYYY-MM-DD') // "YYYY-09-12"
```

## 函数参数列表结尾允许逗号

> 主要作用是方便使用git进行多人协作开发时修改同一个函数减少不必要的行变更。

```js
var f = function(a,
  b,
) {
  ...
}
```

## SharedArrayBuffer对象

SharedArrayBuffer对象用来表示一个通用的，固定长度的原始二进制数据缓冲区，类似于ArrayBuffer对象，它们都可以用来在共享内存(shared memory)上创建视图。与ArrayBuffer不同的是，SharedArrayBuffer不能被分离。

以浏览器终为例，主线程与worker之间共享内存需要通过postMessage函数完成，postMessage接受放入的消息将其序列化再发送给worker，再通过webworker反序列化后放入内存。而这个过程是非常低效的，使用SharedArrayBuffer，通过共享内存来提升workers之间或者worker和主线程之间的消息传递速度。

## Atomics对象

Atomics对象提供了一组静态方法用来对SharedArrayBuffer对象进行原子操作, Atomics的所有属性和方法都是静态的(与Math对象一样)



