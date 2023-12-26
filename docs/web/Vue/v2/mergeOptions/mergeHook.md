---
category:
  - web
tag:
  - vue
---

# lifecycle hooks

```ts
// src/shared/constants.js
export const LIFECYCLE_HOOKS = [
  'beforeCreate',
  'created',
  'beforeMount',
  'mounted',
  'beforeUpdate',
  'updated',
  'beforeDestroy',
  'destroyed',
  'activated',
  'deactivated',
  'errorCaptured',
  'serverPrefetch'
]
```

## mergeHook

```ts
// src/core/util/options.js
LIFECYCLE_HOOKS.forEach(hook => {
  strats[hook] = mergeHook
})

// 合并父子为Array Function
function mergeHook (
  parentVal: ?Array<Function>,
  childVal: ?Function | ?Array<Function>
): ?Array<Function> {
  const res = childVal
    ? parentVal
      ? parentVal.concat(childVal)
      : Array.isArray(childVal)
        ? childVal
        : [childVal]
    : parentVal
  return res
    ? dedupeHooks(res)
    : res
}

```

## utils

```ts
// src/core/util/options.js
// 去重 - 防止多个组件实例钩子选项相互影响
function dedupeHooks (hooks) {
  const res = []
  for (let i = 0; i < hooks.length; i++) {
    if (res.indexOf(hooks[i]) === -1) {
      res.push(hooks[i])
    }
  }
  return res
}
```

## mergeOptions

```ts
// src/core/util/options.js
function mergeField (key) {
  const strat = strats[key] || defaultStrat
  options[key] = strat(parent[key], child[key], vm, key)
}
```
