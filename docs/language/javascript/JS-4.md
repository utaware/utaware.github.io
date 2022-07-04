---
date: 2022-06-29
category:
  - javascript
tag:
  - JS
---

# this关键字

## Method

```js
const o = {
  a: 'oa',
  fn () {
    console.log(this.a) // oa
  }
}
```

## Simple function call

```js
// 严格模式下为undefined
// 非严格模式下为全局对象
function fn () {
  console.log(this)
}

const o = {
  a: 'oa',
  fn () {
    const afn = function () {
      console.log(this)
    }
    afn() // undefined
    console.log(this) // o
  }
}
```

## Arrow function

```js
const o = {
  a: 'oa',
  fn: () => {
    console.log(this.a) // undefind
  }
}
```

## Event listener

```js
  // 实际运作方式更类似于
document.body.addEventListener('click', function () {
  console.log(this)
})
const document = {
  click: function () {
    console.log(this) // document
  },
  dblclick: () => {
    console.log(this) // window
  }
}
```

## new

```js
function Factory (name) {
  this.name = name
}

const f = new Factory('tom')
```

## call, apply, bind

```js
function bind (fn, context) {
  return function (...args) {
    fn.apply(context, args)
  }
}

function a (s) {
  console.log(this.a, s)
}

var o = { a: '1234' }

a.bind(o)('hello')
```
