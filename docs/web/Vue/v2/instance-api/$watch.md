---
category:
  - web
tag:
  - vue
---

# $watch

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

## createWatcher

```ts
// src/core/instance/state.js
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