---
category:
  - web
tag:
  - vue
---

# assets

```ts
// src/shared/constants.js
export const ASSET_TYPES = [
  'component',
  'directive',
  'filter'
]
```

## mergeAssets

```ts
// src/core/util/options.js
ASSET_TYPES.forEach(function (type) {
  strats[type + 's'] = mergeAssets
})

function mergeAssets (
  parentVal: ?Object,
  childVal: ?Object,
  vm?: Component,
  key: string
): Object {
  const res = Object.create(parentVal || null)
  if (childVal) {
    process.env.NODE_ENV !== 'production' && assertObjectType(key, childVal, vm)
    return extend(res, childVal)
  } else {
    return res
  }
}
```

## utils

```ts
// src/core/util/options.js
function assertObjectType (name: string, value: any, vm: ?Component) {
  if (!isPlainObject(value)) {
    warn(
      `Invalid value for option "${name}": expected an Object, ` +
      `but got ${toRawType(value)}.`,
      vm
    )
  }
}
// src/shared/util.js
export function extend (to: Object, _from: ?Object): Object {
  for (const key in _from) {
    to[key] = _from[key]
  }
  return to
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
