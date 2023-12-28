---
category:
  - web
tag:
  - vue
---

# watcher

```ts
// src/core/instance/state.js
export function initState (vm: Component) {
  vm._watchers = []
  const opts = vm.$options
  // ...todo
  if (opts.watch && opts.watch !== nativeWatch) {
    initWatch(vm, opts.watch)
  }
}
// watch选项中支持数组的形式
function initWatch (vm: Component, watch: Object) {
  for (const key in watch) {
    const handler = watch[key]
    if (Array.isArray(handler)) {
      for (let i = 0; i < handler.length; i++) {
        createWatcher(vm, key, handler[i])
      }
    } else {
      createWatcher(vm, key, handler)
    }
  }
}

function createWatcher (
  vm: Component,
  expOrFn: string | Function,
  handler: any,
  options?: Object
) {
  if (isPlainObject(handler)) {
    options = handler
    handler = handler.handler
  }
  if (typeof handler === 'string') {
    handler = vm[handler]
  }
  return vm.$watch(expOrFn, handler, options)
}
```

## immediate

```ts
// src/core/instance/state.js
export function stateMixin (Vue: Class<Component>) {
  Vue.prototype.$watch = function (
    expOrFn: string | Function,
    cb: any,
    options?: Object
  ): Function {
    const vm: Component = this
    // {Function | Object} callback
    if (isPlainObject(cb)) {
      return createWatcher(vm, expOrFn, cb, options)
    }
    options = options || {}
    options.user = true
    const watcher = new Watcher(vm, expOrFn, cb, options)
    if (options.immediate) {
      const info = `callback for immediate watcher "${watcher.expression}"`
      // 执行过程中会触发getter收集依赖
      pushTarget()
      // cb.apply(vm, [watcher.value])
      invokeWithErrorHandling(cb, vm, [watcher.value], vm, info)
      popTarget()
    }
    // 返回一个取消观察函数，用来停止触发回调
    return function unwatchFn () {
      watcher.teardown()
    }
  }
}
```

## deep

```ts
// src/core/observer/watcher.js
export default class Watcher {
  get () {
    if (this.deep) {
      traverse(value)
    }
  }
}
```

::: tip

> 要实现deep的功能, 其实就是除了要触发当前被监听数据的收集依赖逻辑外, 还要把这个值在内的所有子值也都触发一遍依赖收集。

:::

**traverse**

```ts
const seenObjects = new Set();

export function traverse(val: any) {
  _traverse(val, seenObjects);
  seenObjects.clear();
}

function _traverse(val: any, seen: SimpleSet) {
  let i, keys;
  const isA = Array.isArray(val);
  if (
    (!isA && !isObject(val)) ||
    Object.isFrozen(val) ||
    val instanceof VNode
  ) {
    return;
  }
  if (val.__ob__) {
    const depId = val.__ob__.dep.id;
    if (seen.has(depId)) {
      return;
    }
    seen.add(depId);
  }
  if (isA) {
    i = val.length;
    while (i--) _traverse(val[i], seen);
  } else {
    keys = Object.keys(val);
    i = keys.length;
    while (i--) _traverse(val[keys[i]], seen);
  }
}
```

::: tip

> 在获取`val[keys[i]]`的值时会触发`getter`, 进而完成收集依赖的过程

:::