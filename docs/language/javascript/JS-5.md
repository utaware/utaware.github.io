---
date: 2022-06-30
category:
  - javascript
tag:
  - JS
---

# 继承(一)

> 继承的本质就是复制，即重写原型对象，代之以一个新类型的实例。

1. 继承父类的实例属性
2. 继承父类的原型

## 原型链继承

> 将子类的原型链指向父类的实例

```js
function Parent () {
  this.name = 'parent'
  this.friends = ['tom', 'janny']
}

function Child (age) {
  this.age = age
}

Child.prototype = new Parent()

const s = new Child(18)
```

**缺点**:

1. 原型链中引用类型的属性会被所有实例共享的，所有实例对象使用的是同一份数据，会造成相互影响。
2. 在创建子类的实例时，无法向父级构造函数传参

## 借用构造函数(经典继承)

> 在子级构造函数中调用父级构造函数

```js
function Parent () {
  this.name = 'parent'
  this.friends = ['tom', 'janny']
}

Parent.prototype.say = function () {
  console.log(this.name)
}

function Child (age) {
  this.age = age
  Parent.call(this)
}

const s = new Child(18)

s.say() // error
```

**优点**:

1. 避免了引用类型的属性被所有实例共享
2. 可以在子类中向超类传参

**缺点**:

1. 只能继承父类的实例属性和方法，不能继承原型上的属性和方法
2. 无法实现复用，每个子类都有父类实例函数的副本，影响性能

## 组合继承

> 原型链 + 借用构造函数

```js
function Parent () {
  this.name = 'parent'
  this.friends = ['tom', 'janny']
  this.hi = function () {
    console.log('hi')
  }
}

Parent.prototype.say = function () {
  console.log(this.name)
}

function Child (age) {
  this.age = age
  Parent.call(this)
}
// Child.prototype.__proto__ = Parent.prototype => 寄生
Child.prototype = new Parent()
// 识别对象的初始化构造函数
Child.prototype.constructor = Child

const s = new Child(18)
```

**缺点**: 调用了两次父类构造函数，会存在两份相同的属性/方法(实例 & 原型)

## 原型式继承

```js
// EC5通过Object.create()方法规范化了原型式继承
function createObj (o){
  function F () {}
  F.prototype = o
  return new F ()
}

const o = { o: { name: 'jerry' } }

const a = createObj(o)
const b = createObj(o)

console.log(a === b) // false
console.log(a.o === b.o) // true
```

**缺点**: 包含引用类型的属性值始终都会共享相应的值

## 寄生式继承

```js
function createEnhance (o) {
  const clone = createObj(o)
  clone.key = 'val' // 设置额外属性
  clone.hi = function () {
    console.log('hi')
  }
  return clone
}
```

**缺点**: 包含引用类型的属性值始终都会共享相应的值

## 寄生组合式继承

> 寄生 + 组合

```js
function createEnhance (sub, parent) {
  // 创建父类原型的一个副本，只获取原型，实例通过子类调用父类实现
  const clone = createObj(parent.prototype)
  // 弥补因重写原型而失去的默认的constructor 属性
  clone.constructor = sub
  // 设置的不是实例而是原型副本，避免了多余属性，以及二次调用
  sub.prototype = clone
}

function Parent () {
  this.name = 'parent'
  this.friends = ['tom', 'janny']
  this.hi = function () {
    console.log('hi')
  }
}

Parent.prototype.say = function () {
  console.log(this.name)
}

function Child (age) {
  this.age = age
  Parent.call(this)
}

createEnhance(Child, Parent)

const s = new Child(18)
```

**优点**:

1. 只调用了一次父类构造函数
2. 避免了因为子类原型上的多余属性

## ES6继承

```js
class Parent {}

class Child extends Parent {
  constructor () {
    super()
  }
}

function _inherits (subType, superType) {
  // 创建对象，创建父类原型的一个副本
  // 增强对象，弥补因重写原型而失去的默认的constructor 属性
  // 指定对象，将新创建的对象赋值给子类的原型
  subType.prototype = Object.create(superType && superType.prototype, {
    constructor: {
      value: subType,
      enumerable: false,
      writable: true,
      configurable: true
    }
  })
  // 修改__proto__
  if (superType) {
    Object.setPrototypeOf
      ? Object.setPrototypeOf(subType, superType)
      : subType.__proto__ = superType;
  }
}
```

**区别**:

1. ES5的继承实质上是先创建子类的实例对象，然后再将父类的方法添加到this上(Parent.call(this))
2. ES6的继承有所不同，实质上是先创建父类的实例对象this，然后再用子类的构造函数修改this。因为子类没有自己的this对象，所以必须先调用父类的super()方法，否则新建实例报错
