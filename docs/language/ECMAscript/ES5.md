---
date: 2022-06-19
category:
  - language
tag:
  - ES
---

# ES5新增特性

## 严格模式

```js
'use strict'
// code
// 1. 不允许省略var定义变量
// a = 10
// 2. 不允许函数形参同名
// function a (a) { console.log(a) }
// 3. 不允许普通函数中的this代表window
// function log () { console.log(this) } // undefined
```

## 语法改变

1. 保留字(Reserved words)可以作为对象属性了(比如new、function等)。
2. 允许在对象字面量和数组字面量上的使用尾逗号。
3. 多行字符串。
4. 对象的访问器属性。

```js
var obj = { new: 'abc' }

var obj = {
  foo: 'bar',
};

var str = 'I \
	Love\
	You';

var obj = {
  get foo () {
    return 'abc'
  }
};
obj.foo; // "abc"
```

## String

* trim

## Object

**获得和设置原型**

* create
* getPrototypeOf

**管理属性特性**

* defineProperty
* defineProperties
* getOwnPropertyDescriptor

**列举属性**

* keys
* getOwnPropertyNames

**对象处理**

* preventExtensions
* isExtensible
* seal
* isSealed
* freeze
* isFrozen

## Function

* bind

## Array

* isArray
* every
* filter
* forEach
* indexOf
* lastIndexOf
* map
* reduce
* some

## JSON

* parse
* stringify
