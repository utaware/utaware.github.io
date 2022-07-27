---
date: 2022-07-21
category:
  - web
tag:
  - utils
---

# Promise

```js
// Promise存在三个状态（state）pending、fulfilled、rejected
const PENDING = 'pending'
const FULFILLED = 'fulfilled'
const REJECTED = 'rejected'

class MPromise {
  // 内部维护一个状态，初始状态为 pending;
  status = PENDING
  // 内部维护一个value,用来保存 resolve || reject 时的值
  value = null
  reason = null
  // 回调函数
  onResolveCallbacks = []
  onRejectCallbacks = []

  constructor (executor) {
    // 构造函数是立即执行的，接受 resolve,reject 函数作为参数
    // 并且接受两个能改变内部状态的回调函数
    // 触发rejected状态的函数、触发resolved状态的回调函数
    try {
      executor(this.resolve, this.reject)
    } catch (err) {
      this.reject(err)
    }
  }
  // resolve和reject为什么要用箭头函数？
  // 如果直接调用的话，普通函数this指向的是window或者undefined
  // 用箭头函数就可以让this指向当前实例对象
  resolve = (value) => {
    // 状态一旦改变为resolved或rejected后则不能修改。
    if (this.status === PENDING) {
      this.status = FULFILLED
      this.value = value
      this.onResolveCallbacks.forEach(callback => callback())
    }
  }
  reject = (reason) => {
    // 状态一旦改变为resolved或rejected后则不能修改。
    if (this.status === PENDING) {
      this.status = REJECTED
      this.reason = reason
      this.onRejectCallbacks.forEach(callback => callback())
    }
  }

  static resolve (p) {
    if (p instanceof MPromise) {
      return p
    }
    return new MPromise((resolve) => {
      resolve(p)
    })
  }

  static reject (p) {
    return new MPromise((resolve, reject) => {
      reject(p)
    })
  }
  // Promise的实例上有一个.then方法，接受两个参数
  // 1. 成功的回调 2. 失败的回调
  then (onResolve, onReject) {
    // 参数校验，确保一定是函数
    onResolve = typeof onResolve === 'function' ? onResolve : val => val
    onReject = typeof onReject === 'function' ? onReject : reason => { throw reason }
    // 为了支持Promise的链式调用，Promise.then 会返回一个新的Promise
    const next = new MPromise((resolve, reject) => {
      // queueMicrotask
      const fulfilledMicrotask = () => {
        queueMicrotask(() => {
          try {
            const value = onResolve(this.value)
            this.resolvePromise(next, value, resolve, reject)
          } catch (err) {
            reject(err)
          }
        })
      }
      const rejectedMicrotask = () => {
        queueMicrotask(() => {
          try {
            const reason = onReject(this.reason)
            this.resolvePromise(next, reason, resolve, reject)
          } catch (err) {
            reject(err)
          }
        })
      }
      // 封装前一个Promise成功时执行函数
      if (this.status === FULFILLED) {
        fulfilledMicrotask()
      } else if (this.status === REJECTED) {
        rejectedMicrotask()
      } else if (this.status === PENDING) {
        this.onResolveCallbacks.push(fulfilledMicrotask)
        this.onRejectCallbacks.push(rejectedMicrotask)
      }
    })
    return next
  }
  // catch捕获错误处理
  catch (reject) {
    return this.then(null, reject)
  }
  // race
  race (promises) {
    return new MPromise((reject, resolve) => {
      for (let i = 0, len = promises.length; i < len; i++) {
        promises
      }
    })
  }
  // 让不同的promise代码互相套用
  resolvePromise (next, value, resolve, reject) {
    // 如果相等了，说明return的是自己，抛出类型错误并返回
    // console.log(value)
    if (next === value) {
      return reject(new TypeError('Chaining cycle detected for promise'))
    }
    // value 为 null 直接返回
    if (value === null) {
      return resolve(value)
    }
    if (['function', 'object'].includes(typeof value)) {
      // 具有then方法的对象
      let then = value.then
      // 判断then
      if (typeof then === 'function') {
        // 防止多次调用
        let called = false
        // 调用新的then方法
        try {
          then.call(value, (v) => {
            if (called) {
              return
            }
            called = true
            this.resolvePromise(next, v, resolve, reject)
          }, (err) => {
            // 成功和失败只能调用一个
            if (called) {
              return
            }
            called = true
            reject(err)
          })
        } catch (err) {
          reject(err)
        }
      } else {
        resolve(value)
      }
    } else {
      resolve(value)
    }
  }
}
```
