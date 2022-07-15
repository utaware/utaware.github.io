---
date: 2022-07-01
category:
  - language
tag:
  - JS
---

# 继承(二)

## `__proto__`

作为`Object.prototype`上的一个存取器属性主要用来获取或者设置某个对象的`[[prototype]]` internal-slot。它形成对象的原型链，用于对象的属性访问。

## `prototype`

`prototype`用于存储实例的公共属性，如果一个Built-in function本来就不打算用于创建&&初始化一个对象(即不作为constructor使用)，那么引擎就没有必要事先为其定义prototype属性。

## `constructor`

如果一个function-object 既具有`prototype`属性，又具有`[[construct]]`internal-method，那么它就是一个constructor，此时该function-object承担着creates and initializes objects的责任。

::: warning

1. `Proxy`产生的对象并没有`__proto__`
2. `Math`下的函数并没有`prototype`和`constructor`

:::

## `new`

```js
function newOperator (fn, ...args) {
  // 创建一个新对象o
  const o = {}
  // 将构造函数的this指向新对象o
  const f = fn.call(o, args)
  // 将新对象o的原型对象指向构造函数的原型属性
  // o.__proto__ = fn.prototype
  Object.setPrototypeOf(o, fn.prototype)
  // 如果返回值是个对象(引用类型)则返回该对象，否则返回新对象o
  return f instanceof Object ? f : o
}
```

## 假想

```js
// 首先假定了一个环境中只含有对象这一概念
// 那么可以通过简单的方式创建一些对象
var a0 = { name: 'tom', age: 18 }
// 但如果创建相似结构的对象，随着属性的增多，这似乎开始显得繁琐
var a1 = { name: 'jack', age: 20 }
var a2 = { name: 'jerry', age: 24 }
// 那么能否通过一种方式，更便捷的创建对象
// 使用function似乎是一种不错的选择，但他不是已经被我们用来执行代码了吗
// 嘿，那只是一种方式，我们难道不能通过些其他的东西变成其他方式吗
// 哦，也许使用一个new作为关键字好像不错，似乎创建了一个新的对象
function Person (name, age) {
  this.name = name
  this.age = age
}
var a3 = new Person('simth', 26)
// 这看上去好像不错，但假设他们具有完全相同的属性，这是否显得有些不必要？
// 显然，如果再去逐一增加某一项属性会显得更加笨拙
// 如果给这些对象添加一个能连接到相同属性集合的通道怎么样？
// 把他们连接起来，这好像非常不错
// 如果还是写在里面好像，会不太合适，也许他应该更特殊一些
// 既然他们具有相同的属性，反过来说不也像是通过类似的方式被创建出来的
// 的确，那么就叫[[prototype]]怎么样，就像是创建他们的原型
// 那我们如何去描述这种联系呢？
// 既然是函数创建了他们，那么在函数上添加这个属性怎么样
// 可那是函数，添加属性不应该是在对象上的行为吗
// 嘿，既然他已经能做那么多事了，为什么我们不能让他看起来也像一个对象
// 并且这样就只有对象了？一个可执行的对象!
const common = { common: 'person' }
Person[[prototype]] = common
a3.__proto__ = common
// 也许为了标明这个对象和函数的关系还应该做一些措施
common.constructor = Person
// 这好像是一种类似于继承的关系，那么我怎么样去确定这种关系？
function instanceOf (o, f) {
  return o.__proto__ === f.prototype
}
// 如果有很多的对象最终串联到一个顶级对象
// 或者更确切的说一个顶级对象衍生了下面无数对象
// 下面的对象可以通过__proto__一直往上串联起来
// 这就好像一颗大树一样，而单一条而言又像一条链一样
// 从这个过程来看，两个属性本没有什么特别意义，都是为了简化这一实现的接口
```
