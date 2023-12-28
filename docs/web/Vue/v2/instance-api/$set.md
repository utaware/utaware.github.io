---
category:
  - web
tag:
  - vue
---

# $set

```ts
// src/core/instance/state.js
export function stateMixin (Vue: Class<Component>) {
  Vue.prototype.$set = set
}
```

```ts
// src/core/observer/index.js
export function set (target, key, val) {
  // {Object | Array} target
  if (process.env.NODE_ENV !== 'production' &&
    (isUndef(target) || isPrimitive(target))
  ) {
    // warn(`Cannot set reactive property on undefined, null, or primitive value: ${(target: any)}`)
  }
  // 数组
  if (Array.isArray(target) && isValidArrayIndex(key)) {
    target.length = Math.max(target.length, key)
    target.splice(key, 1, val)
    return val
  }
  // 已存在属性 - 已侦测 - 更新
  if (key in target && !(key in Object.prototype)) {
    target[key] = val
    return val
  }
  const ob = target.__ob__
  // target不能是vue实例
  // ob.vmCount -> asRootData -> 根数据对象 -> initData
  if (target._isVue || (ob && ob.vmCount)) {
    return val
  }
  // 不存在属性 - 赋值 - 侦测
  if (!ob) {
    target[key] = val
    return val
  }
  defineReactive(ob.value, key, val)
  ob.dep.notify()
  return val
}
```
