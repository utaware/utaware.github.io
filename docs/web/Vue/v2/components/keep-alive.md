---
category:
  - web
tag:
  - vue
---

# keep-alive

## use

```html
<keep-alive :include="whiteList" :exclude="blackList" :max="amount">
  <!-- 动态组件 -->
  <component :is="currentComponent"></component>
  <!-- vue-router -->
  <router-view></router-view>
</keep-alive>
```

## props

### `include`

- type : `[String, RegExp, Array]`
- desc : 缓存白名单

### `exclude`

- type : `[String, RegExp, Array]`
- desc : 缓存黑名单

### `max`

- type : `[String, Number]`
- desc : 缓存组件上限，超出上限使用LRU的策略置换缓存数据

## hooks

* activated
* deactivated

> 被包含在 keep-alive 中创建的组件，会多出两个生命周期的钩子: activated 与 deactivated，在服务器端渲染期间不被调用。使用 keep-alive 会将数据保留在内存中，如果要在每次进入页面的时候获取最新的数据，需要在 activated 阶段获取数据，承担原来 created 钩子函数中获取数据的任务。

## abstract

> `keep-alive`是一个抽象组件：它自身不会渲染一个 DOM 元素，也不会出现在父组件链中；使用`keep-alive`包裹动态组件时，会缓存不活动的组件实例，而不是销毁它们。缓存机制是根据`LRU策略`来设置缓存组件新鲜度

```js
// src/core/instance/lifecycle.js
export function initLifecycle (vm: Component) {
  const options = vm.$options
  let parent = options.parent
  if (parent && !options.abstract) {
    // 在初始化阶段会调用 initLifecycle，里面判断父级是否为抽象组件，如果是抽象组件，就选取抽象组件的上一级作为父级，忽略与抽象组件和子组件之间的层级关系。
    while (parent.$options.abstract && parent.$parent) {
      parent = parent.$parent
    }
    parent.$children.push(vm)
  }
  vm.$parent = parent
  // ...
}
```

## source-code

```ts
type CacheEntry = {
  name: ?string;
  tag: ?string;
  componentInstance: Component;
};

const patternTypes: Array<Function> = [String, RegExp, Array]
```

```js
// src/core/components/keep-alive.js
export default {
  name: 'keep-alive',
  // 判断当前组件虚拟dom是否渲染成真是dom的关键
  abstract: true,
  props: {
    include: patternTypes, // 缓存白名单
    exclude: patternTypes, // 缓存黑名单
    max: [String, Number] // 缓存的组件实例数量上限
  },
  created () {
    // 初始化两个对象分别缓存VNode（虚拟DOM）和VNode对应的键集合
    this.cache = Object.create(null) // 缓存虚拟dom
    this.keys = [] // 缓存的虚拟dom的健集合
  },
  destroyed () {
    // 删除this.cache中缓存的VNode实例。
    // 这里不是简单地将this.cache置为null，而是遍历调用pruneCacheEntry函数删除。
    for (const key in this.cache) { // 删除所有的缓存
      pruneCacheEntry(this.cache, key, this.keys)
    }
  },
  mounted () {
    // 在mounted这个钩子中对include和exclude参数进行监听
    // 然后实时地更新（删除）this.cache对象数据。pruneCache函数的核心也是去调用pruneCacheEntry。
    this.$watch('include', val => {
      pruneCache(this, name => matches(val, name))
    })
    this.$watch('exclude', val => {
      pruneCache(this, name => !matches(val, name))
    })
  },
  render () {
    const slot = this.$slots.default
    // 如果 keep-alive 存在多个子元素，keep-alive 要求同时只有一个子元素被渲染。
    // 所以在开头会获取插槽内的子元素，调用 getFirstComponentChild 获取到第一个子元素的 VNode。
    const vnode: VNode = getFirstComponentChild(slot)
    const componentOptions: ?VNodeComponentOptions = vnode && vnode.componentOptions
    if (componentOptions) {
      // check pattern
      const name: ?string = getComponentName(componentOptions)
      const { include, exclude } = this
      // 接着判断当前组件是否符合缓存条件，组件名与include不匹配或与exclude匹配都会直接退出并返回 VNode，不走缓存机制。
      if (
        // not included
        (include && (!name || !matches(include, name))) ||
        // excluded
        (exclude && name && matches(exclude, name))
      ) {
        return vnode
      }
      // 匹配条件通过会进入缓存机制的逻辑
      const { cache, keys } = this
      const key: ?string = vnode.key == null
        // same constructor may get registered as different local components
        // so cid alone is not enough (#3269)
        ? componentOptions.Ctor.cid + (componentOptions.tag ? `::${componentOptions.tag}` : '')
        : vnode.key
      // 如果命中缓存，从 cache 中获取缓存的实例设置到当前的组件上
      if (cache[key]) {
        vnode.componentInstance = cache[key].componentInstance
        // 并调整 key 的位置将其放到最后。
        remove(keys, key)
        keys.push(key)
      } else {
        // 如果没命中缓存，将当前 VNode 缓存起来
        cache[key] = vnode
        // 并加入当前组件的 key
        keys.push(key)
        // 如果缓存组件的数量超出 max 的值，即缓存空间不足
        // 则调用 pruneCacheEntry 将最旧的组件从缓存中删除，即 keys[0] 的组件。
        if (this.max && keys.length > parseInt(this.max)) {
          pruneCacheEntry(cache, keys[0], keys, this._vnode)
        }
      }
      // 之后将组件的 keepAlive 标记为 true，表示它是被缓存的组件。
      vnode.data.keepAlive = true
    }
    return vnode || (slot && slot[0])
  }
}
```

```js
// src/core/components/keep-alive.js
// 负责将组件从缓存中删除，调用组件 $destroy 方法销毁组件实例，缓存组件置空，并移除对应的 key
function pruneCacheEntry (
  cache: VNodeCache,
  key: string,
  keys: Array<string>,
  current?: VNode
) {
  const cached = cache[key]
  if (cached && (!current || cached.tag !== current.tag)) {
    cached.componentInstance.$destroy() // 执行组件的destory钩子函数
  }
  cache[key] = null
  remove(keys, key)
}

function pruneCache (keepAliveInstance: any, filter: Function) {
  const { cache, keys, _vnode } = keepAliveInstance
  for (const key in cache) {
    const cachedNode: ?VNode = cache[key]
    if (cachedNode) {
      const name: ?string = getComponentName(cachedNode.componentOptions)
      if (name && !filter(name)) {
        pruneCacheEntry(cache, key, keys, _vnode)
      }
    }
  }
}
```

## render

`keep-alive`并非真的不会渲染，而是渲染的对象是包裹的子组件。`Vue` 的渲染最后都会到 `patch` 过程, 而组件的 `patch` 过程会执行 `createComponent `方法

```js
// src/core/vdom/patch.js
function createComponent (vnode, insertedVnodeQueue, parentElm, refElm) {
  let i = vnode.data
  if (isDef(i)) {
    // isReactivated 标识组件是否重新激活
    // 首次渲染
    // vnode.componentInstance -> undefined (在componentVNodeHooks.insert中被赋值)
    // i.keepAlive -> true (render中改变)
    const isReactivated = isDef(vnode.componentInstance) && i.keepAlive
    if (isDef(i = i.hook) && isDef(i = i.init)) {
      // 此时 i => vnode.data.hook.init => init(vnode, false)
      i(vnode, false /* hydrating */) // => create-component.js
    }

    if (isDef(vnode.componentInstance)) {
      // 调用 initComponent 将 vnode.elm 赋值为真实dom
      initComponent(vnode, insertedVnodeQueue)
      // 然后调用 insert 将组件的真实dom插入到父元素中。
      insert(parentElm, vnode.elm, refElm)
      // 组件命中缓存被重新激活
      if (isTrue(isReactivated)) {
        // 组件被 keep-alive 包裹的情况，激活组件
        reactivateComponent(vnode, insertedVnodeQueue, parentElm, refElm)
      }
      return true
    }
  }
}
```

**首次渲染**

在首次加载被包裹组件时，由`keep-alive.js`中的`render函`数可知，`vnode.componentInstance`的值是`undefined`，`keepAlive`的值是`true`，因为`keep-alive`组件作为父组件，它的`render`函数会先于被包裹组件执行；那么就只执行到`i(vnode, false /* hydrating */)`，后面的逻辑不再执行


```js
// 源码位置：src/core/vdom/create-component.js
const componentVNodeHooks = {
  init (vnode: VNodeWithData, hydrating: boolean): ?boolean {
    if (
      vnode.componentInstance &&
      !vnode.componentInstance._isDestroyed &&
      vnode.data.keepAlive
    ) {
      // kept-alive components, treat as a patch
      const mountedNode: any = vnode // work around flow
      componentVNodeHooks.prepatch(mountedNode, mountedNode)
    } else {
      // createComponentInstanceForVnode 内会 new Vue 构造组件实例并赋值到 componentInstance，
      // 随后调用 $mount 挂载组件。
      const child = vnode.componentInstance = createComponentInstanceForVnode(
        vnode,
        activeInstance
      )
      child.$mount(hydrating ? vnode.elm : undefined, hydrating)
    }
  },
  // ...
}
```
