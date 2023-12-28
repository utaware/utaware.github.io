---
category:
  - web
tag:
  - vue
---

# $delete

```ts
// src/core/instance/state.js
export function stateMixin (Vue: Class<Component>) {
  Vue.prototype.$delete = del
}
```

```ts
// src/core/observer/index.js
export function del (target: Array<any> | Object, key: any) {
  if (process.env.NODE_ENV !== 'production' &&
    (isUndef(target) || isPrimitive(target))
  ) {
    // warn(`Cannot delete reactive property on undefined, null, or primitive value: ${(target: any)}`)
  }
  // 如果是数组从数组中删除当前元素
  if (Array.isArray(target) && isValidArrayIndex(key)) {
    target.splice(key, 1)
    return
  }
  const ob = (target).__ob__
  // target不能是vue实例和根数据对象
  if (target._isVue || (ob && ob.vmCount)) {
    return
  }
  // 如果目标对象没有该属性
  if (!hasOwn(target, key)) {
    return
  }
  delete target[key]
  // 判断是否是响应式数据 - 非响应式数据只需要删除属性 不需要继续触发响应式
  if (!ob) {
    return
  }
  ob.dep.notify()
}
```