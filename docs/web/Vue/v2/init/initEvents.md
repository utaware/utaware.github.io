---
category:
  - web
tag:
  - vue
---

# initEvents

```ts
// src/core/instance/events.js
export function initEvents (vm: Component) {
  vm._events = Object.create(null)
  vm._hasHookEvent = false
  // init parent attached events
  const listeners = vm.$options._parentListeners
  if (listeners) {
    updateComponentListeners(vm, listeners)
  }
}
```

## updateComponentListeners

```ts
// src/core/instance/events.js
export function updateComponentListeners (
  vm: Component,
  listeners: Object,
  oldListeners: ?Object
) {
  target = vm
  updateListeners(listeners, oldListeners || {}, add, remove, createOnceHandler, vm)
  target = undefined
}
```

## add && remove

```ts
// src/core/instance/events.js
function add (event, fn) {
  target.$on(event, fn)
}

function remove (event, fn) {
  target.$off(event, fn)
}
```

## createOnceHandler

```ts
// src/core/instance/events.js
// 执行一次后再$off
function createOnceHandler (event, fn) {
  const _target = target
  return function onceHandler () {
    const res = fn.apply(null, arguments)
    if (res !== null) {
      _target.$off(event, onceHandler)
    }
  }
}
```

## updateListeners

```ts
// src/core/vdom/helpers/update-listeners.js
export function createFnInvoker (fns: Function | Array<Function>, vm: ?Component): Function {
  function invoker () {
    const fns = invoker.fns
    if (Array.isArray(fns)) {
      const cloned = fns.slice()
      for (let i = 0; i < cloned.length; i++) {
        invokeWithErrorHandling(cloned[i], null, arguments, vm, `v-on handler`)
      }
    } else {
      // return handler return value for single handlers
      return invokeWithErrorHandling(fns, null, arguments, vm, `v-on handler`)
    }
  }
  invoker.fns = fns
  return invoker
}

export function updateListeners (
  on: Object,
  oldOn: Object,
  add: Function,
  remove: Function,
  createOnceHandler: Function,
  vm: Component
) {
  let name, def, cur, old, event
  for (name in on) {
    def = cur = on[name]
    old = oldOn[name]
    event = normalizeEvent(name)
    if (isUndef(cur)) {
      process.env.NODE_ENV !== 'production' && warn(
        `Invalid handler for event "${event.name}": got ` + String(cur),
        vm
      )
    } else if (isUndef(old)) {
      // on存在 - oldOn不存在 -> 事件需要被添加
      if (isUndef(cur.fns)) {
        // 添加错误处理
        cur = on[name] = createFnInvoker(cur, vm)
      }
      if (isTrue(event.once)) {
        // once 修饰符修饰过的事件
        cur = on[name] = createOnceHandler(event.name, cur, event.capture)
      }
      // 将事件存入当前组件事件对象
      add(event.name, cur, event.capture, event.passive, event.params)
    } else if (cur !== old) {
      // oldOn存在 & on 存在 -> 但新旧不同 -> 事件应当被更新
      old.fns = cur
      on[name] = old
    }
  }
  // oldOn中存在 - on中不存在 -> 说明事件需要移除
  for (name in oldOn) {
    if (isUndef(on[name])) {
      event = normalizeEvent(name)
      remove(event.name, oldOn[name], event.capture)
    }
  }
}
```
