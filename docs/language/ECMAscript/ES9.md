---
date: 2022-06-22
category:
  - language
tag:
  - ES
---

# ES9新增特性

## asynchronous iterators(异步迭代器)

```js
async function pending () {
  // 直接在循环中await的方式，是每一个独立的Promise的等待
  // for (let time of timers) {
  //   const t = await time
  //   console.log(t)
  // }
  // 等待timers中每个promise的变化, 再执行循环体内的语句
  for await (let time of timers) {
    console.log(time)
  }
}
```

::: tip

可通过Symbol.asyncIterator定义异步迭代的行为

```js
const asyncIterator = {
  [Symbol.asyncIterator]: async function* () {
    yield `a`
    yield `b`
    yield `c`
  },
};

(async () => {
  for await (const x of asyncIterator) {
    console.log(x)
  }
})()
```

:::

## Object Rest Spread

::: tip

ES6: 添加了对数组的Rest Spread操作符

:::

::: code-tabs

@tab Spread

```js
const input = {
  a: '1',
  b: '2'
}

const output = {
  ...input,
  c: '3'
}

console.log(output) // {a: '1', b: '2', c: '3'}
```

@tab Rest

```js
const output = {
  a: '1',
  b: '2',
  c: '3'
}

const { a, ...other } = output

console.log(other) // {b: '2', c: '3'}
```

:::

## Promise.prototype.finally()

> 返回一个Promise，在promise执行结束时，无论结果是fulfilled或者是rejected，在执行then()和catch()后，都会执行finally指定的回调函数。

```js
fetch(url).then(() => {
  // todo
}).catch(() => {
  // todo
}).finally(() => {
  // todo
})
```

## 正则表达式特性

* s(dotAll)标志
* 正则命名捕获组(RegExp named capture groups)
* 正则表达式后行断言(RegExp Lookbehind Assertions)
* 正则表达式中的Unicode属性转义(RegExp Unicode Property Escapes)

### s(dotAll)标志

正则表达式中，点（.）是一个特殊字符，代表任意的单个字符，但是有两个例外。

1. 四个字节的UTF-16字符 (通过给正则设置u(unicode)标志解决)
2. 行终止符 (通过ES9设置doall模式: s标记)

* 不识别
  * U+000A 换行 (**LF**) (`\n`)
  * U+000D 回车 (**CR**) (`\r`)
  * U+2028 线分隔符
  * U+2029 段落分隔符
* 识别
  * U+000B 垂直制表符 (`\v`)
  * U+000C 换页 (`\f`)
  * U+0085 下一行

```js
const spaceUnicode = [
  '\u000A',
  '\u000D',
  '\u2028',
  '\u2029',
  '\u000B',
  '\u000C',
  '\u0085'
]

spaceUnicode.map((v) => {
  return /./.test(v)
})
```

```js
console.log(/foo.bar/.test('foo\nbar')) // false
console.log(/foo.bar/s.test('foo\nbar')) // true

// 如何判断当前正则是否使用了 dotAll 模式
const re = /foo.bar/s
console.log(re.dotAll) // true
console.log(re.flags) // 's'
```

### 命名捕获组

在一些正则表达式模式中，使用数字进行匹配可能会令人混淆

```js
// const re = /(\d{4})-(\d{2})-(\d{2})/
const re = /(?<year>\d{4})-(?<month>\d{2})-(?<day>\d{2})/
const time = '2019-01-01'
const match = re.exec(time)

console.log(match.groups) // {year: '2019', month: '01', day: '01'}
console.log(time.replace(re,'$<day>/$<month>/$<year>')) // 01/01/2019
```

### Lookbehind 后行断言

JavaScript 语言的正则表达式，只支持先行断言，不支持后行断言，先行断言我们可以简单理解为"先遇到一个条件，再判断后面是否满足"

```js
let test = 'hello world'
console.log(test.match(/hello(?=\sworld)/)) // ["hello", index: 0, input: "hello world", groups: undefined]
```

但有时我们想判断前面是 world 的 hello，这个代码是实现不了的。在 ES9 就支持这个后行断言了

```js
// (?<…)是后行断言的符号，(?..)是先行断言的符号，然后结合 =(等于)、!(不等)、\1(捕获匹配)。
let test = 'world hello'
console.log(test.match(/(?<=world\s)hello/)) // ["hello", index: 6, input: "world hello", groups: undefined]
```

### Unicode属性转义

允许正则表达式匹配符合Unicode某种属性的所有字符

```js
const str1 = '㉛'
console.log(/\d/u.test(str1)) // false
console.log(/\p{Number}/u.test(str1)) // true

const str2 = '🤣'
console.log(/\p{Emoji}/gu.test(str2)) // true
console.log(/\P{Emoji}/gu.test(str2)) // false
```

