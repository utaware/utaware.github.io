---
date: 2024-04-22
category:
  - language
tag:
  - TS
---

# extends

> A extends B -> A 是 B 的子集(扩展)

```ts
// 对于类型和对象表现看似有所不同
type ex1 = { a: 1 } extends { a: 1, b: 2 } ? true : false // false
type ex2 = { a: 1, b: 2, c: 3 } extends { a: 1, b: 2 } ? true : false // true

type ex3 = number extends number | string ? true : false // true
// 从表面上看，对于类型和对象这种"部分"的关系好像相反
// 实际上这种"部分"的关系也许并不是看上去的那样
type A = { a: 1 }
type B = { b: 2 }
type C = { c: 3 }

type ANB = A & B
type AOB = A | B

type IsExtends<T, K> = [T] extends [K] ? true : false

type e1 = IsExtends<A, ANB> // false
type e2 = IsExtends<ANB, A> // true

let a: A = { a: 1 }
let b: B = { b: 2 }
let c: C = { c: 3 }

let anb: ANB = { a: 1, b: 2 }
let aob: AOB = { a: 1 }

a = anb // anb 是 a 的子集 -> A & B 是 A 的子集
aob = a // a 是 aob 的子集 -> A 是 A | B 的子集
aob = anb // anb 是 aob 的子集 -> A & B 是 A | B 的子集

// A & B -> A, B -> A | B
type e3 = IsExtends<ANB, AOB> // true
type e4 = IsExtends<number & string, number | string> // true
```

## 继承

```ts
class Children extends Parent {}
```

## 类型组合

```ts
interface Parent1 {}
interface Parent2 {}
interface Children extends Parent1, Parent2 {}
```

::: tip

类只能扩展一个类，接口可以扩展多个接口以及类，扩展类时可以认为是与类的形状进行组合，但如果再被类实现的时候，则需要再继承这个类

:::

## 泛型约束

```ts
type TM <T extends number | string> = { value: T }

const ex1: TM<number> = { value: 1 } // ok
const ex2: TM<string> = { value: '2' } // ok
const ex3: TM<boolean> = { value: true } // error
```

**注意:**

```ts
type TM <T extends number> = T
type ex1 = TM<any> // ok -> any既是一切类型父类也是子类
type ex3 = TM<never> // ok -> nerver除any外的一切类型子类
type ex2 = TM<number | string> // error -> 针对联合类型extends会分别判断
```

**类型继承关系:**

- any
  - unknown
    - {}
      - number
      - string
      - boolean
      - bigInt
      - symbol
      - object
        - array
        - function
        - constructor
    - null
    - void
      - undefined

## 条件类型

```ts
type IsNumber<T> = T extends number ? true : false;
```

**注意:**

```ts
type IsNever<T> = T extends never ? true : false

type TM1 = 1 extends {} ? true : false // true -> 此处{}不为空字面量，是一切有值类型的基类
type TM2 = unknown extends {} ? true : false // false -> unknow是{}的父类
type TM3 = any extends {} ? true : false // boolean -> any会被拆解成相斥的两部分同时得到true和false值合成boolean
type TM4 = any extends unknown ? true : false // true -> unknow拆不出来！
type TM5 = never extends never ? true : false // true
type TM6 = IsNever<never> // never -> 此时的never先被当作了没有任何元素的联合

type TIsNever<T> = [T] extends [never] ? true : false

type TM7 = TIsNever<never> // true -> 消除了extends的分配律
```
